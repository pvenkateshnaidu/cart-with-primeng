import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import { CartComponent } from './components/cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import {CartService} from "./services/cart.service";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule ,FormsModule,BrowserAnimationsModule,TableModule,ButtonModule,CardModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
