import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../../business/home-page/home-page.component';
import { NewsComponent } from '../../business/news/news.component';
import { PageNotFindComponent } from '../../business/page-not-find/page-not-find.component';
import { PokemonDetailComponent } from '../../business/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from '../../business/pokemon-list/pokemon-list.component';
import { Gen1Component } from '../../business/pokemon-list/gen1/gen1.component';
import { Gen2Component } from '../../business/pokemon-list/gen2/gen2.component';
import { Gen3Component } from '../../business/pokemon-list/gen3/gen3.component';
import { Gen4Component } from '../../business/pokemon-list/gen4/gen4.component';
import { Gen5Component } from '../../business/pokemon-list/gen5/gen5.component';
import { Gen6Component } from '../../business/pokemon-list/gen6/gen6.component';
import { Gen7Component } from '../../business/pokemon-list/gen7/gen7.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    component: HomePageComponent,
    children: [
      {
        path: 'pokemon-list',
        component: PokemonListComponent
      },
      {
        path: 'pokemon-list/gen1',
        component: Gen1Component
      },
      {
        path: 'pokemon-list/gen2',
        component: Gen2Component
      },
      {
        path: 'pokemon-list/gen3',
        component: Gen3Component
      },
      {
        path: 'pokemon-list/gen4',
        component: Gen4Component
      },
      {
        path: 'pokemon-list/gen5',
        component: Gen5Component
      },
      {
        path: 'pokemon-list/gen6',
        component: Gen6Component
      },
      {
        path: 'pokemon-list/gen7',
        component: Gen7Component
      },
      {
        path: 'pokemon-list/:id',
        component: PokemonDetailComponent
      },
      {
        path: 'news',
        component: NewsComponent
      }
    ]
  },
  {
    path: '404',
    component: PageNotFindComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
