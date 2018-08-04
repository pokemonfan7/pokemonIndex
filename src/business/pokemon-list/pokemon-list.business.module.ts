import { NgModule } from '@angular/core';
import {PokemonListComponent} from './pokemon-list.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    PokemonListComponent,
  ]
})
export class PokemonListBusinessModule { }
