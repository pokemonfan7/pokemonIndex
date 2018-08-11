import { Component, OnInit } from '@angular/core';
import { PokemonJson, PokemonService } from '../../../shared/pokemon.service';

@Component({
  selector: 'app-gen6',
  templateUrl: './gen6.component.html',
})
export class Gen6Component implements OnInit {

  pokemons: PokemonJson[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getLocationPms('pokemonGen6', 6);
  }

}
