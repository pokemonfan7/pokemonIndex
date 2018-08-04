import { Component, OnInit } from '@angular/core';
import { PokemonJson } from '../../shared/pokemon.service';
import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { SetPokemons } from '../../core/states/pokemons-list/pokemons-list.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
      private http: HttpClient,
      private store: Store,
  ) { }

  ngOnInit() {
    this.http.get('/assets/pokemons.json')
    .subscribe((res: PokemonJson[]) => {
      res.reverse();
      const pokemonArray = [];
      res.forEach(allPm => {
        if (pokemonArray.every(pItem => pItem.number !== allPm.number)) {
          pokemonArray.push(allPm);
        }
      });
      const pokemons = pokemonArray.reverse();
      this.store.dispatch(new SetPokemons(pokemons));
    });
  }
}
