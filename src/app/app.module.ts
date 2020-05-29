import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IConfig, SCREEN_SIZES} from './module-for-directive/IConfig'
import {ModuleForDirectiveModule} from './module-for-directive/module-for-directive.module'
import { InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';

const config : IConfig = { mobile: 800, tablet: 1600};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModuleForDirectiveModule
  ],
  providers: [{provide: SCREEN_SIZES, useValue: config}],
  bootstrap: [AppComponent]
})
export class AppModule { }
