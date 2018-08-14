import { Component, OnInit } from '@angular/core';
import { PokemonJson } from '../../shared/pokemon.service';
import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { SetPokemons } from '../../core/states/pokemons-list/pokemons-list.store';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
      private http: HttpClient,
      private store: Store,
  ) { }

  ngOnInit() {
    this.http.get('/assets/chfinal.json')
    .subscribe((res: PokemonJson[]) => {
      const pokemons = res;
      this.store.dispatch(new SetPokemons(pokemons));
    });
  }
}
