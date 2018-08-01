import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetPokemons } from '../../core/states/pokemons-list/pokemons-list.store';
import { PokemonService } from '../../shared/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.less']
})
export class HomePageComponent implements OnInit {


  constructor(
      private store: Store,
      private pokemonService: PokemonService
  ) { }

  ngOnInit() {
  }

  locationPm(startId, endId) {
      this.pokemonService.getAllPms();
      const pokemons = this.store.selectSnapshot(state => state.pokemonsList.pokemons);
      const locationPokemon = pokemons.filter(pokemon => pokemon.id >= startId && pokemon.id <= endId);
      this.store.dispatch(new SetPokemons(locationPokemon));
  }
}


