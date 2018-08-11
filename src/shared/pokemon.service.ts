import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {RandomPokemon} from '../core/states/pokemons-list/pokemons-list.store';
import {SelectedId} from '../core/states/selected-id/selected-id.store';

@Injectable(
  {providedIn: 'root'}
)
export class PokemonService {

  constructor(private store: Store) {
  }

  getLocationPms(gen, selectId) {
    this.store.dispatch(new SelectedId(selectId));
    return this.store.selectSnapshot(state => state.pokemonsList[gen]);
  }

  getPmDetail(id: string) {
    return this.store.selectSnapshot(state => state.pokemonsList.pokemons).find(pokemon => pokemon.id === Number(id));
  }

  searchPms(v) {
    if (Number(v) || Number(v) === 0) {
      const searchPm = this.store.selectSnapshot(state => state.pokemonsList.pokemons).filter(pokemon => pokemon.number.indexOf(v) >= 0);
      this.store.dispatch(new RandomPokemon(searchPm));
    } else {
      const searchPm = this.store.selectSnapshot(state => state.pokemonsList.pokemons).filter(pokemon => pokemon.chName.indexOf(v) >= 0);
      this.store.dispatch(new RandomPokemon(searchPm));
    }
  }

  surprisePm() {
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
        this.store.selectSnapshot(state => state.pokemonsList.pokemons).find(pokemon => pokemon.id === n)
      )
    );
    console.log(surprisePms);
    this.store.dispatch(new RandomPokemon(surprisePms));
  }
}

export class PokemonJson {
  constructor(
    public abilities: string[],
    public weight: number,
    public weakness: string[],
    public number: string,
    public height: number,
    public featured: string,
    public name: string,
    public id: number,
    public type: string[]
  ) { }
}
