import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../shared/pokemon.service';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: [ './pokemon-list.component.less' ]
})
export class PokemonListComponent implements OnInit {

    private pokemons: Pokemon[];

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit() {
        this.pokemons = this.pokemonService.getPokemons();
    }
}
