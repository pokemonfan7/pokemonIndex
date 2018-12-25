import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core'
import { PokemonJson, PokemonService } from '../../shared/pokemon.service'
import { Store } from '@ngxs/store'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.less']
})
export class HomePageComponent implements OnInit, OnDestroy {
    pokemons: PokemonJson[]
    selectId: number
    subs: Subscription[] = []

  constructor(
      private store: Store,
      private pokemonService: PokemonService,
      private cdf: ChangeDetectorRef
  ) { }

  ngOnInit() {
      const selectSub = this.store.select(state => state.selectedId.selectId).subscribe(v => {
          this.selectId = v
          this.cdf.detectChanges()
      })
      this.subs.push(selectSub)
  }

  locationPm(gen, selectId) {
      this.pokemons = this.pokemonService.getLocationPms(gen, selectId)
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe())
  }
}


