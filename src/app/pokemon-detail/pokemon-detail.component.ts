import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonService } from '../../shared/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  private pokemonDetail: Pokemon;

  constructor(
    private routerInfo: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string = this.routerInfo.snapshot.params['id'];
    this.pokemonDetail = this.pokemonService.getPmDetail(pokemonId);
  }

}
