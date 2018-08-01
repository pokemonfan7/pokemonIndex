import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetPokemons } from '../core/states/pokemons-list/pokemons-list.store';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons: Pokemon[] = [
    new Pokemon(1, '001', '妙蛙种子'),
    new Pokemon(2, '002', '妙蛙草'),
    new Pokemon(3, '003', '妙蛙花'),
    new Pokemon(4, '004', '小火龙'),
    new Pokemon(5, '005', '火恐龙'),
    new Pokemon(6, '006', '喷火龙'),
    new Pokemon(7, '007', '杰尼龟'),
    new Pokemon(8, '008', '卡咪龟'),
    new Pokemon(9, '009', '水箭龟'),
    new Pokemon(10, '010', '绿毛虫'),
    new Pokemon(11, '011', '铁甲蛹'),
    new Pokemon(12, '012', '巴大蝶'),
    new Pokemon(13, '013', '独角虫'),
    new Pokemon(14, '014', '铁壳蛹'),
    new Pokemon(15, '015', '大针蜂'),
    new Pokemon(16, '016', '波波'),
    new Pokemon(17, '017', '比比鸟'),
    new Pokemon(18, '018', '大比鸟（比雕）'),
    new Pokemon(19, '019', '小拉达'),
    new Pokemon(20, '020', '拉达'),
    new Pokemon(21, '021', '烈雀'),
    new Pokemon(22, '022', '大烈雀'),
    new Pokemon(23, '023', '阿柏蛇'),
    new Pokemon(24, '024', '阿柏怪'),
    new Pokemon(25, '025', '皮卡丘'),
    new Pokemon(26, '026', '雷丘'),
  ];

  constructor(private store: Store) { }

  getAllPms() {
    this.store.dispatch(new SetPokemons(this.pokemons));
  }

  getPmDetail(num: string): Pokemon {
    return this.pokemons.find(pokemon => pokemon.number === num);
  }

  searchPms(v) {
    if (Number(v)) {
      const searchPm = this.store.selectSnapshot(state => state.pokemonsList.pokemons).filter(pokemon => pokemon.number.indexOf(v) >= 0);
        this.store.dispatch(new SetPokemons(searchPm));
    } else {
        const searchPm = this.store.selectSnapshot(state => state.pokemonsList.pokemons).filter(pokemon => pokemon.name.indexOf(v) >= 0);
        this.store.dispatch(new SetPokemons(searchPm));
    }
  }

  surprisePm() {
    const numSets = [];
    const surprisePms = [];
    for (let i = 1; i < 15; i++) {
      const n = Math.round(Math.random() * (this.pokemons.length - 1)) + 1;
      if (numSets.indexOf(n) >= 0) {
        i--;
      } else {
        numSets.push(n);
      }
    }
    numSets.forEach(
      n => surprisePms.push(
        this.pokemons.find(pokemon => pokemon.id === n)
      )
    );
    console.log(surprisePms);
      this.store.dispatch(new SetPokemons(surprisePms));
  }
}

export class Pokemon {
  constructor(
    public id: number,
    public number: string,
    public name: string
  ) {}
}
