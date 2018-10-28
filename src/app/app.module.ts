import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { OpeningComponent } from './opening/opening.component';

import { AppRoutingModule } from './app-routing.module';
import { SnowComponent } from './snow/snow.component';

@NgModule({
  declarations: [
    AppComponent,
    OpeningComponent,
    SnowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
