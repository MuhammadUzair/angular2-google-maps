

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';
import {MarkerService} from './services/marker.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1xQH5jsVxy9j_G4bWkKK9vUjV1O6AxUQ'
    })
    ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
