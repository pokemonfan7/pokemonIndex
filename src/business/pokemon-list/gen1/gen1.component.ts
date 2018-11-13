import { Component, OnInit } from '@angular/core'
import { PokemonJson, PokemonService } from '../../../shared/pokemon.service'

@Component({
  selector: 'app-gen1',
  templateUrl: './gen1.component.html',
})
export class Gen1Component implements OnInit {

  pokemons: PokemonJson[]

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getLocationPms('pokemonGen1', 1)
  }
}
