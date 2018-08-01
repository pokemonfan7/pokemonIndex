import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../shared/pokemon.service';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: [ './pokemon-list.component.less' ]
})
export class PokemonListComponent implements OnInit {

    private pokemons: Pokemon[];

    constructor(
        private pokemonService: PokemonService,
        private store: Store
    ) {}

    ngOnInit() {
        this.pokemonService.getLocationPms(1, 151);
        this.store.select(state => state.pokemonsList.pokemons).subscribe(v => {
            this.pokemons = v;
        });
    }
}
