import { Component, OnInit } from '@angular/core';
import { PokemonJson, PokemonService } from '../../../shared/pokemon.service';

@Component({
  selector: 'app-gen2',
  templateUrl: './gen2.component.html',
})
export class Gen2Component implements OnInit {

  pokemons: PokemonJson[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getLocationPms('pokemonGen2', 2);
  }
}
