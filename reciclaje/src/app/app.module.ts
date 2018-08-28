import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppmenuComponent } from './appmenu/appmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppmenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AppmenuComponent
  ]
})
export class AppModule { }
