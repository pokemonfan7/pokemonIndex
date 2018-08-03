import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { SetPokemons } from '../core/states/pokemons-list/pokemons-list.store';
import { SelectedId } from '../core/states/selected-id/selected-id.store';

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
    new Pokemon(152, '152', '菊草叶'),
    new Pokemon(153, '153', '月桂叶'),
    new Pokemon(154, '154', '大竺葵'),
    new Pokemon(252, '252', '木守宫'),
    new Pokemon(253, '253', '森林蜥蜴'),
    new Pokemon(254, '254', '蜥蜴王'),
    new Pokemon(387, '387', '草苗龟'),
    new Pokemon(388, '388', '树林龟'),
    new Pokemon(389, '389', '土台龟'),
    new Pokemon(494, '494', '比克提尼'),
    new Pokemon(495, '495', '藤藤蛇'),
    new Pokemon(496, '496', '青藤蛇'),
    new Pokemon(497, '497', '君主蛇'),
    new Pokemon(650, '650', '哈力栗'),
    new Pokemon(651, '651', '胖胖哈力'),
    new Pokemon(652, '652', '布里卡隆'),
    new Pokemon(722, '722', '木木枭'),
    new Pokemon(723, '723', '投羽枭'),
    new Pokemon(724, '724', '狙射树枭'),
  ];

  constructor(private store: Store,
              private http: HttpClient,) {
    this.http.get('/assets/pokemons.json')
    .subscribe((res: PokemonJson[]) => {
      res.reverse();
      const pokemonArray = [];
      res.forEach(allPm => {
        if (pokemonArray.every(pItem => pItem.number !== allPm.number)) {
          pokemonArray.push(allPm);
        }
      });
      this.pokemons = pokemonArray.reverse();
    });
  }

  getAllPms() {
    this.store.dispatch(new SetPokemons(this.pokemons));
  }

  getLocationPms(startId, endId, selectId) {
    this.store.dispatch(new SelectedId(selectId));
    this.getAllPms();
    const pokemons = this.store.selectSnapshot(state => state.pokemonsList.pokemons);
    const locationPms = pokemons.filter(pokemon => pokemon.id >= startId && pokemon.id <= endId);
    this.store.dispatch(new SetPokemons(locationPms));
  }

  getPmDetail(id: string): Pokemon {
    this.getAllPms();
    return this.store.selectSnapshot(state => state.pokemonsList.pokemons).find(pokemon => pokemon.id === Number(id));
  }

  searchPms(v) {
    this.getAllPms();
    if (Number(v) || Number(v) === 0) {
      const searchPm = this.store.selectSnapshot(state => state.pokemonsList.pokemons).filter(pokemon => pokemon.number.indexOf(v) >= 0);
      this.store.dispatch(new SetPokemons(searchPm));
    } else {
      const searchPm = this.store.selectSnapshot(state => state.pokemonsList.pokemons).filter(pokemon => pokemon.name.indexOf(v) >= 0);
      this.store.dispatch(new SetPokemons(searchPm));
    }
  }

  surprisePm() {
    this.getAllPms();
    const numSets = [];
    const surprisePms = [];
    for (let i = 1; i < 15; i++) {
      const n = Math.round(Math.random() * 805) + 1;
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
  constructor(public id: number,
              public number: string,
              public name: string) {
  }
}

export class PokemonJson {
  constructor(public abilities: string[],
              public detailPageURL: string,
              public weight: number,
              public weakness: string[],
              public number: string,
              public height: number,
              public collectibles_slug: string,
              public featured: string,
              public slug: string,
              public name: string,
              public ThumbnailAltText: string,
              public ThumbnailImage: string,
              public id: number,
              public type: string[]) {
  }
}
