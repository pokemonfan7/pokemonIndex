import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons = [
    new Pokemon('001', '妙蛙种子'),
    new Pokemon('002', '妙蛙草'),
    new Pokemon('003', '妙蛙花'),
  ];

  constructor() { }

  getPokemons() {
    return this.pokemons;
  }

  getPokemonDetail(id: string): Pokemon[] {
    return this.pokemons.find(pokemon => pokemon.id === id);
  }
}

export class Pokemon {
  constructor(
    public id: string,
    public name: string
  ) {}
}
