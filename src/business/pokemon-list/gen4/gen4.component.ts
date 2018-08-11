import { Component, OnInit } from '@angular/core';
import { PokemonJson, PokemonService } from '../../../shared/pokemon.service';

@Component({
  selector: 'app-gen4',
  templateUrl: './gen4.component.html',
})
export class Gen4Component implements OnInit {

  pokemons: PokemonJson[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getLocationPms('pokemonGen4', 4);
  }
}
