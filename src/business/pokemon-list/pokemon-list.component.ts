import {Component, OnDestroy, OnInit} from '@angular/core';
import { PokemonJson } from '../../shared/pokemon.service';
import { Store } from '@ngxs/store';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit, OnDestroy {

    private pokemons: PokemonJson[];
    private subs: Subscription[] = [];

    constructor(private store: Store) {}

    ngOnInit() {
        const randomSub = this.store.select(state => state.pokemonsList.randomPokemon).subscribe(v => {
          console.log(v);
          this.pokemons = v;
        });
        this.subs.push(randomSub);
    }

    ngOnDestroy() {
      this.subs.forEach(sub => sub.unsubscribe());
    }
}
