import { Action, State, StateContext } from '@ngxs/store';

export class SetPokemons {
    static readonly type = '[PokemonsList] get pokemons';
    constructor( public payload) {}
}

@State({
    name: 'pokemonsList',
    defaults: {
        pokemons: []
    }
})

export class PokemonsListState {
    @Action(SetPokemons)
    setPokemons(ctx, action) {
        const state = ctx.getState();
        ctx.setState({
            pokemons: [ ...action.payload ]
        });
    }
}
