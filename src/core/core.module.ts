import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AllStates } from './states/all-state';

const isDev = !environment.production;
const modules = [
    HttpClientModule,
    NgxsModule.forRoot(AllStates, { developmentMode: isDev }),
];

if (isDev) {
    modules.push(NgxsLoggerPluginModule.forRoot());
}

@NgModule({
    imports: [
        ...modules
    ],
    providers: [
    ],
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    }
}
