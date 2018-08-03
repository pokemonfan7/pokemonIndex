import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';

@Component({
    selector: 'app-search-pokemon',
    templateUrl: './search-pokemon.component.html',
    styleUrls: [ './search-pokemon.component.less' ]
})
export class SearchPokemonComponent implements OnInit {

    private searchWord: string;

    constructor(
        private pokemonService: PokemonService,
    ) {}

    ngOnInit() {
    }

    searchPokemon(v) {
      this.pokemonService.searchPms(v);
    }

    surprisePm() {
        this.pokemonService.surprisePm();
    }
}
