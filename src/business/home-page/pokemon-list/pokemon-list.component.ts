import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import {Subscription} from 'rxjs'
import { PokemonJson } from '../../../shared/pokemon.service'

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit, OnDestroy {

    @Input() pokemons: PokemonJson[]
    private subs: Subscription[] = []

    constructor(private store: Store) {}

    ngOnInit() {
        const randomSub = this.store.select(state => state.pokemonsList.randomPokemon).subscribe(v => {
          this.pokemons = v
        })
        this.subs.push(randomSub)
    }

    ngOnDestroy() {
      this.subs.forEach(sub => sub.unsubscribe())
    }
}
