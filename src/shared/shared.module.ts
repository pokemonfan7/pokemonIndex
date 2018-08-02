import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPokemonComponent } from './component/search-pokemon/search-pokemon.component';
import { FormsModule } from '@angular/forms';
import { UpperFirstPipe } from './pipe/upperFirst';

const PIPES = [
    UpperFirstPipe
];

const COMPONENTS = [
    SearchPokemonComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
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
