import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  private pokemons: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }

  turnToNews() {
      this.router.navigate(['news']);
  }
}


