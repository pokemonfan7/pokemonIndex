import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Store } from '@ngxs/store'
import { AddRequest } from '../states/loading/loading.store'

const REST_PARAMS = /(:[^/]+)/g

@Injectable()
export class RequestRestInterceptor implements HttpInterceptor {
    constructor(private store: Store) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let realReq = request
        const matched = request.url.match(REST_PARAMS)
        if (matched && matched.length > 0) {
            matched.forEach(function (param) {
                const paramName = param.substring(1)
                const pVal = request.params.get(paramName)
                if (!pVal) {
                    throw new URIError(`[REST] No target value for replacing resource id in url.
                         Params in url must be placed in params within RequestOptions`)
                }

                realReq = realReq.clone({
                    url: realReq.url.replace(param, pVal),
                    params: realReq.params.delete(paramName)
                })
            })
        }

        this.store.dispatch(new AddRequest())

        return next.handle(realReq)
    }
}

export const requestInterceptor = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestRestInterceptor,
        multi: true
    }
]
