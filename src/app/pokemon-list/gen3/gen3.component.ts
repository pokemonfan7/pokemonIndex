import { Component, OnInit } from '@angular/core';
import { PokemonJson, PokemonService } from '../../../shared/pokemon.service';

@Component({
  selector: 'app-gen3',
  templateUrl: './gen3.component.html',
})
export class Gen3Component implements OnInit {

  private pokemons: PokemonJson[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getLocationPms('pokemonGen3', 3);
  }
}
