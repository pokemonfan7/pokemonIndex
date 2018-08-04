import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPokemonComponent } from './component/search-pokemon/search-pokemon.component';
import { FormsModule } from '@angular/forms';
import { UpperFirstPipe } from './pipe/upperFirst';
import { PokemonItemComponent } from './component/pokemon-item/pokemon-item.component';
import { AppRoutingModule } from '../apps/app/app-routing.module';

const PIPES = [
    UpperFirstPipe
];

const COMPONENTS = [
    SearchPokemonComponent,
    PokemonItemComponent,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    exports: [
        ...PIPES,
        ...COMPONENTS,
    ],
    declarations: [
        ...PIPES,
        ...COMPONENTS,
    ]
})
export class SharedModule {
}
