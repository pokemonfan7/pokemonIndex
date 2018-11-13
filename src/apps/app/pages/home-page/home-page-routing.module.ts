import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomePageComponent} from '../../../../business/home-page/home-page.component'
import {NewsComponent} from '../../../../business/news/news.component'

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'pokemon-list',
        loadChildren: './pokemon-list/pokemon-list.module#PokemonListModule',
      },
      {
        path: 'pokemon-list/gen1',
        loadChildren: './pokemon-list/gen1/gen1.module#Gen1Module'
      },
      {
        path: 'pokemon-list/gen2',
        loadChildren: './pokemon-list/gen2/gen2.module#Gen2Module'
      },
      {
        path: 'pokemon-list/gen3',
        loadChildren: './pokemon-list/gen3/gen3.module#Gen3Module'
      },
      {
        path: 'pokemon-list/gen4',
        loadChildren: './pokemon-list/gen4/gen4.module#Gen4Module'
      },
      {
        path: 'pokemon-list/gen5',
        loadChildren: './pokemon-list/gen5/gen5.module#Gen5Module'
      },
      {
        path: 'pokemon-list/gen6',
        loadChildren: './pokemon-list/gen6/gen6.module#Gen6Module'
      },
      {
        path: 'pokemon-list/gen7',
        loadChildren: './pokemon-list/gen7/gen7.module#Gen7Module'
      },
      {
        path: 'pokemon-list/:id',
        loadChildren: './pokemon-list/pokemon-detail/pokemon-detail.module#PokemonDetailModule'
      },
      {
        path: 'news',
        component: NewsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class HomePageRoutingModule { }
