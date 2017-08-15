import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { OrderComponent } from './order1/order1-list.component';

@NgModule({
  imports: [
    BrowserModule
    
  ],
  declarations: [
  AppComponent ,
  BookComponent ,
  OrderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
