import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { NewsComponent } from './news/news.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';

const routes: Routes = [
    {
        path: '',
        component: PokemonsComponent
    },
    {
        path: 'news',
        component: NewsComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
