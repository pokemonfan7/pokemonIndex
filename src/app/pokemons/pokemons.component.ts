import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  private pokemons: Pokemon[];
  private searchWord: string = '';

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
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


