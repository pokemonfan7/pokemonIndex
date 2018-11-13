import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SearchPokemonComponent} from './component/search-pokemon/search-pokemon.component'
import {FormsModule} from '@angular/forms'
import {UpperFirstPipe} from './pipe/upperFirst'
import {PokemonItemComponent} from './component/pokemon-item/pokemon-item.component'
import {PageNotFindComponent} from '../business/page-not-find/page-not-find.component'
import { RouterModule } from '@angular/router'
import { LazyLoadImageModule } from 'ng-lazyload-image'
import { NumInputDirective } from './directive/num-input.directive'

const PIPES = [
  UpperFirstPipe,
]

const DIRECTIVES = [
  NumInputDirective,
]

const COMPONENTS = [
  SearchPokemonComponent,
  PokemonItemComponent,
  PageNotFindComponent,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LazyLoadImageModule,
  ],
  exports: [
    ...PIPES,
    ...DIRECTIVES,
    ...COMPONENTS,
  ],
  declarations: [
    ...PIPES,
    ...DIRECTIVES,
    ...COMPONENTS,
  ]
})
export class SharedModule {
}
