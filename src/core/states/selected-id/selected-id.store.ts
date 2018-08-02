import { Action, State } from '@ngxs/store';

export class SelectedId {
    static readonly type = '[SelectedId] set selected id';
    constructor(public payload) {}
}

@State({
    name: 'selectedId',
    defaults: {
        selectId: 1
    }
})

export class SelectedIdState {
    @Action(SelectedId)
    setPokemons(ctx, action) {
        const state = ctx.getState();
        ctx.setState({
            selectId: action.payload
        });
    }
}
