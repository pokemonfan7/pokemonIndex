import { Action, State, StateContext } from '@ngxs/store';

export class SetPokemons {
    static readonly type = '[PokemonsList] get pokemons';
    constructor(public pokemons, public payload) {}
}

@State({
    name: 'pokemons-list',
    defaults: {
        pokemons: {}
    }
})

export class PokemonsListState {
    @Action(SetPokemons)
    SetPokemons(ctx, action: SetPokemons) {
        ctx.setState({
            ...action.payload
        });
    }
}
