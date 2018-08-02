import { PokemonsListState } from './pokemons-list/pokemons-list.store';
import { LoadingState } from './loading/loading.store';
import { SelectedIdState } from './selected-id/selected-id.store';

export const AllStates = [
    PokemonsListState,
    LoadingState,
    SelectedIdState,
];
