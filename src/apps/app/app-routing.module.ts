import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageNotFindComponent } from '../../business/page-not-find/page-not-find.component'

const routes: Routes = [
  {
    path: '404',
    component: PageNotFindComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
