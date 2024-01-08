import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxKonvaModule} from "ngx-konva";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxKonvaModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
