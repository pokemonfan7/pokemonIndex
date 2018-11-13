import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    loadChildren: './home-page/home-page.module#HomePageModule',
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class PagesRoutingModule { }
