import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { NavigationEnd, Router } from '@angular/router'
import { Observable } from 'rxjs/index'
import { HiddenEntryLoading } from '../../../core/states/entry-loading/entry-loading.store'

@Component({
    selector: 'app-root',
    template: '<app-entry-loading *ngIf="loading"></app-entry-loading><router-outlet></router-outlet>',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    loading

    constructor(
      private store: Store,
      private cdf: ChangeDetectorRef,
      private router: Router,
    ) {}

    ngOnInit() {
        this.store.select(state => state.entryLoading.loading).subscribe(value => {
            this.loading = value
            this.cdf.detectChanges()
        })
        const navigationEnd$ = this.router.events
            .filter(e => e instanceof NavigationEnd) as Observable<NavigationEnd>
        // TODO: 每次切换都会被通知，需要优化
        navigationEnd$.subscribe(() => {
            this.store.dispatch(new HiddenEntryLoading())
        })
    }
}
