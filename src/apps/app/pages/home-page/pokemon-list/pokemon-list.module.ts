import { NgModule } from '@angular/core';
import {PokemonListRoutingModule} from './pokemon-list-routing.module';
import {PokemonListBusinessModule} from '../../../../../business/pokemon-list/pokemon-list.business.module';

@NgModule({
  imports: [
    PokemonListRoutingModule,
    PokemonListBusinessModule,
  ],
  declarations: []
})
export class PokemonListModule { }
