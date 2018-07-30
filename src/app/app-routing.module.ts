import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { NewsComponent } from './news/news.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'pokemon',
        pathMatch: 'full'
    },
    {
        path: 'pokemon',
        component: PokemonsComponent,
        children: [
            {
                path: 'pokemon-list',
                component: PokemonListComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
