import { NgModule } from '@angular/core'
import {PokemonDetailComponent} from './pokemon-detail.component'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    component: PokemonDetailComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PokemonDetailComponent
  ]
})
export class PokemonDetailBusinessModule { }
