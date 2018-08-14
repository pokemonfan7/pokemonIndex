import { Injectable } from '@angular/core'
import {
    HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
    HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'
import { NbResponse } from '../models'
import { catchError, map } from 'rxjs/internal/operators'
import { throwError } from 'rxjs/index'
import { Store } from '@ngxs/store'
import { RequestDone } from '../states/loading/loading.store'
import { NzMessageService } from 'ng-zorro-antd'

const errorHandler = <T>() => (source: Observable<T>) => new Observable<T>((subscriber) => {
    source.subscribe({
        next(value: T) {
            if (value instanceof HttpResponse) {
                const body = value.body
                if (body.status < 400) {
                    subscriber.next(value)
                } else {
                    subscriber.error(`[response] ${body.message}`)
                }
            }
        },
        error(err) {
            // 拦截http的错误信息，方便以后统一处理请求错误的问题。
            console.log(err)
            subscriber.error(err)
        },
        complete() { subscriber.complete() },
    })
})

@Injectable()
export class ResponseFormatInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private store: Store,
        private messageService: NzMessageService,
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    const body: NbResponse<any> = event.body
                    this.store.dispatch(new RequestDone())
                    if (body.status === 401) {
                        // auth fail, redirect to login
                        this.router.navigate(['entrance'])
                    } else if (body.status !== 200) {
                        // some error happen from backend
                        this.messageService.error(body.message)
                        throwError(body.message)
                    }
                }

                return event
            }),
            catchError((err) => {
                let errMessage = err
                if (err instanceof HttpErrorResponse) {
                    errMessage = err.statusText
                    // http error
                    this.store.dispatch(new RequestDone())
                }
                this.messageService.error(errMessage)

                return throwError(errMessage)
            }),
            errorHandler()
        )
    }
}

export const responseInterceptor = [
    // response 顺序是从后往前
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ResponseFormatInterceptor,
        multi: true
    }
]
