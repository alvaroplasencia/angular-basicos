import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contadores/contadores.module';
import { HeroeModule } from './heroes/heroes.module';
import { DgzModule } from './dgz/dgz.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule,
    DgzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
