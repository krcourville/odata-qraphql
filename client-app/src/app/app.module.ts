import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiClientService } from './services/api-client.service';
import { FlightListComponent } from './components/flight-list/flight-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
