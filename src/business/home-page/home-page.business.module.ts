import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {HomePageComponent} from './home-page.component'
import { RouterModule, Routes } from '@angular/router'
import {SharedModule} from '../../shared/shared.module'
import { PokemonListComponent } from './pokemon-list/pokemon-list.component'

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: ':id',
        loadChildren: '../../apps/app/pages/pokemon-detail/pokemon-detail.module#PokemonDetailModule'
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePageComponent,
    PokemonListComponent
  ]
})
export class HomePageBusinessModule { }
