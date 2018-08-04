import { Component, OnInit } from '@angular/core';
import { PokemonJson } from '../../shared/pokemon.service';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {

    private pokemons: PokemonJson[];

    constructor(private store: Store) {}

    ngOnInit() {
        this.store.select(state => state.pokemonsList.randomPokemon).subscribe(v => {
          console.log(v);
          this.pokemons = v;
        });
    }
}
