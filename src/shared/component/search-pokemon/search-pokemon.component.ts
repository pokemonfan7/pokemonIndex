import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-search-pokemon',
    templateUrl: './search-pokemon.component.html',
    styleUrls: [ './search-pokemon.component.less' ]
})
export class SearchPokemonComponent implements OnInit {

    private searchWord;

    constructor(
        private pokemonService: PokemonService,
        private store: Store
    ) {
    }

    ngOnInit() {
    }

    searchPokemon(v) {
        if (!v) {
            this.pokemonService.getAllPms();
            this.store.selectSnapshot(state => state.pokemonsList.pokemon);
        } else {
            this.pokemonService.getAllPms();
            this.pokemonService.searchPms(v);
        }
    }

    surprisePm() {
        this.pokemonService.getAllPms();
        this.pokemonService.surprisePm();
    }
}
