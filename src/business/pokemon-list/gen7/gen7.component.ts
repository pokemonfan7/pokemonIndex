import { Component, OnInit } from '@angular/core'
import { PokemonJson, PokemonService } from '../../../shared/pokemon.service'

@Component({
  selector: 'app-gen7',
  templateUrl: './gen7.component.html'
})
export class Gen7Component implements OnInit {

  pokemons: PokemonJson[]

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getLocationPms('pokemonGen7', 7)
  }

}
