import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from '../../../../../business/pokemon-list/pokemon-list.component';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'gen1',
    loadChildren: './gen1/gen1.module#Gen1Module'
  },
  {
    path: 'gen2',
    loadChildren: './gen2/gen2.module#Gen2Module'
  },
  {
    path: 'gen3',
    loadChildren: './gen3/gen3.module#Gen3Module'
  },
  {
    path: 'gen4',
    loadChildren: './gen4/gen4.module#Gen4Module'
  },
  {
    path: 'gen5',
    loadChildren: './gen5/gen5.module#Gen5Module'
  },
  {
    path: 'gen6',
    loadChildren: './gen6/gen6.module#Gen6Module'
  },
  {
    path: 'gen7',
    loadChildren: './gen7/gen7.module#Gen7Module'
  },
  {
    path: ':id',
    loadChildren: './pokemon-detail/pokemon-detail.module#PokemonDetailModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class PokemonListRoutingModule {
}
