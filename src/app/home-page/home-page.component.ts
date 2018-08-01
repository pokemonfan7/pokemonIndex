import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.less']
})
export class HomePageComponent implements OnInit {


  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  locationPm(startId, endId) {
      this.pokemonService.getLocationPms(startId, endId);
  }
}


