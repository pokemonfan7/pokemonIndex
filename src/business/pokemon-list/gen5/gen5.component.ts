import { Component, OnInit } from '@angular/core'
import { PokemonJson, PokemonService } from '../../../shared/pokemon.service'

@Component({
  selector: 'app-gen5',
  templateUrl: './gen5.component.html',
})
export class Gen5Component implements OnInit {

  pokemons: PokemonJson[]

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getLocationPms('pokemonGen5', 5)
  }

}
