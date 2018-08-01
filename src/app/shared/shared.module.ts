import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPokemonComponent } from './component/search-pokemon/search-pokemon.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
    SearchPokemonComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ...COMPONENTS,
    ],
    declarations: [
        SearchPokemonComponent
    ]
})
export class SharedModule {
}