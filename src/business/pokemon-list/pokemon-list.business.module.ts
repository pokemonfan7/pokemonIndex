import { NgModule } from '@angular/core';
import {PokemonListComponent} from './pokemon-list.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PokemonListComponent,
  ]
})
export class PokemonListBusinessModule { }
