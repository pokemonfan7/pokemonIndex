import { NgModule } from '@angular/core'
import {PokemonListComponent} from './pokemon-list.component'
import {SharedModule} from '../../shared/shared.module'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
],
  declarations: [
    PokemonListComponent,
  ]
})
export class PokemonListBusinessModule { }
