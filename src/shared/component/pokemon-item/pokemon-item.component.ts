import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: [ './pokemon-item.component.less']
})
export class PokemonItemComponent implements OnInit {
    @Input() pokemon
    src: string
    defaultSrc = '/assets/pokemon/132.png'

    constructor() {
    }

    ngOnInit() {
        this.src = `/assets/pokemon/${this.pokemon.number}.png`
    }

}
