import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/pokemon.service';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.less']
})
export class HomePageComponent implements OnInit {

    selectId: number;

  constructor(
      private store: Store,
      private pokemonService: PokemonService,
      private cdf: ChangeDetectorRef
  ) { }

  ngOnInit() {
      this.store.select(state => state.selectedId.selectId).subscribe(v => {
          this.selectId = v;
          this.cdf.detectChanges();
      });
  }

  locationPm(startId, endId, selectId) {
      this.pokemonService.getLocationPms(startId, endId, selectId);
  }
}


