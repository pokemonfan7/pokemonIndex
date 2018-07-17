import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons = [
    new Pokemon('001', '妙蛙种子'),
    new Pokemon('002', '妙蛙草'),
    new Pokemon('003', '妙蛙花'),
    new Pokemon('004', '妙蛙种子'),
    new Pokemon('005', '小火龙'),
    new Pokemon('006', '火恐龙'),
    new Pokemon('007', '喷火龙'),
    new Pokemon('008', '杰尼龟'),
    new Pokemon('009', '卡咪龟'),
    new Pokemon('010', '水箭龟'),
    new Pokemon('011', '绿毛虫'),
    new Pokemon('012', '铁甲蛹'),
    new Pokemon('013', '巴大蝶'),
    new Pokemon('014', '独角虫'),
    new Pokemon('015', '铁壳蛹'),
    new Pokemon('016', '大针蜂'),
    new Pokemon('017', '波波'),
    new Pokemon('018', '比比鸟'),
    new Pokemon('019', '大比鸟（比雕）'),
    new Pokemon('020', '小拉达'),
    new Pokemon('021', '拉达'),
  ];

  constructor() { }

  getPokemons() {
    return this.pokemons;
  }

  getPokemonDetail(id: string): Pokemon {
    return this.pokemons.find(pokemon => pokemon.id === id);
  }

  searchPokemons(v) {
    if (Number(v)) {
      return this.pokemons.filter(pokemon => pokemon.id.indexOf(v) >= 0);
    } else {
      return this.pokemons.filter(pokemon => pokemon.name.indexOf(v) >= 0);
    }
  }

  surprisePokemon() {
    const numSets = [];
    const surprisePokemons = [];
    for (let i = 1; i < 11; i++) {
      const n = Math.round(Math.random() * 19) + 1;
      if (numSets.indexOf(n) >= 0) {
        i--;
      } else {
        numSets.push(n);
      }
    }
    numSets.forEach(
      n => surprisePokemons.push(
        this.pokemons.find(pokemon => Number(pokemon.id) === n)
      )
    );
    console.log(surprisePokemons);
    return surprisePokemons;
  }
}

export class Pokemon {
  constructor(
    public id: string,
    public name: string
  ) {}
}
