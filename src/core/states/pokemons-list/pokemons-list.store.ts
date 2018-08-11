import { Action, State } from '@ngxs/store';

export class SetPokemons {
  static readonly type = '[PokemonsList] get all pokemons';

  constructor(public payload) {
  }
}

export class RandomPokemon {
  static readonly type = '[RandomPokemons] get surprise and search pokemons';

  constructor(public payload) {
  }
}

@State({
  name: 'pokemonsList',
  defaults: {
    pokemons: [],
    pokemonGen1: [],
    pokemonGen2: [],
    pokemonGen3: [],
    pokemonGen4: [],
    pokemonGen5: [],
    pokemonGen6: [],
    pokemonGen7: [],
    randomPokemon: [],
  }
})

export class PokemonsListState {
  @Action(SetPokemons)
  setPokemons(ctx, action) {
    ctx.setState({
      pokemons: [ ...action.payload ],
      pokemonGen1: [ ...action.payload.slice(0, 151) ],
      pokemonGen2: [ ...action.payload.slice(151, 251) ],
      pokemonGen3: [ ...action.payload.slice(251, 386) ],
      pokemonGen4: [ ...action.payload.slice(386, 493) ],
      pokemonGen5: [ ...action.payload.slice(493, 649) ],
      pokemonGen6: [ ...action.payload.slice(649, 721) ],
      pokemonGen7: [ ...action.payload.slice(721, 807) ],
    });
  }

  @Action(RandomPokemon)
  randomPokemon(ctx, action) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      randomPokemon: [ ...action.payload ],
    });
  }
}
