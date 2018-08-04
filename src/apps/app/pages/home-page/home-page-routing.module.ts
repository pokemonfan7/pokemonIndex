import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../../../../business/home-page/home-page.component';
import {NewsComponent} from '../../../../business/news/news.component';

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
        path: 'news',
        component: NewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class HomePageRoutingModule { }
