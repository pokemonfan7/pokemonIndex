import { Injectable } from '@angular/core'
import { ApiAddress } from '../../core.api'
import { map, tap } from 'rxjs/internal/operators'
import { NbResponse } from '../../models'
import { HttpClient } from '@angular/common/http'
import { Logout } from './authentication.store'
import { Store } from '@ngxs/store'
import { Router } from '@angular/router'

@Injectable()
export class AuthenticationService {

    constructor(
        private http: HttpClient,
        private store: Store,
        private router: Router,
    ) {
    }

    login(data) {
        return this.http.post(ApiAddress.LOGIN, data)
            .pipe(map((res: NbResponse<any>) => {
                return res
            }))
    }

    logout() {
        return this.http.delete(ApiAddress.LOGIN).pipe(tap(() => {
            this.router.navigate(['entrance']).then(() => {
                this.store.dispatch(new Logout())
            })
        }))
    }

    registerSendEmail(email) {
        return this.http.get(ApiAddress.REGISTER, {params: {email}})
            .pipe(
                map((res: NbResponse<any>) => {
                return res
                })
            )
    }

    forgetSendEmail(email) {
        return this.http.get(ApiAddress.RESETPASSWORD, {params: {email}})
            .pipe(
                map((res: NbResponse<any>) => {
                return res
                })
            )
    }

}

export interface NbResponse<T, M = null> {
  status: number | string
  message: string
  data: T
  meta?: M
}
