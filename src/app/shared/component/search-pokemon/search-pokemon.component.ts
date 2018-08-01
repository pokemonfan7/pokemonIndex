import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../pokemon.service';

@Component({
    selector: 'app-search-pokemon',
    templateUrl: './search-pokemon.component.html',
    styleUrls: [ './search-pokemon.component.less' ]
})
export class SearchPokemonComponent implements OnInit {

    private pokemons: Pokemon[];
    private searchWord: string;

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit() {
    }

    searchPokemon(v) {
        if (!v) {
            this.pokemons = this.pokemonService.getPokemons();
        } else {
            this.pokemons = this.pokemonService.searchPokemons(v);
        }
    }

    surprisePokemon() {
        this.pokemons = this.pokemonService.surprisePokemon();
    }
}
