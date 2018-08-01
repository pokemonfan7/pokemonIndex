import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.less']
})
export class HomePageComponent implements OnInit {


  constructor(private pokemonService: PokemonService) { }

  activeBtn: boolean[] = [true, false, false, false, false, false, false];

  ngOnInit() {
  }

  locationPm(startId, endId) {
      this.pokemonService.getLocationPms(startId, endId);
      switch (startId) {
          case 1: this.activeBtn = [true, false, false, false, false, false, false]; break;
          case 152: this.activeBtn = [false, true, false, false, false, false, false]; break;
          case 252: this.activeBtn = [false, false, true, false, false, false, false]; break;
          case 387: this.activeBtn = [false, false, false, true, false, false, false]; break;
          case 494: this.activeBtn = [false, false, false, false, true, false, false]; break;
          case 650: this.activeBtn = [false, false, false, false, false, true, false]; break;
          case 722: this.activeBtn = [false, false, false, false, false, false, true]; break;
          default: this.activeBtn = [false, false, false, false, false, false, false];
      }
  }
}


