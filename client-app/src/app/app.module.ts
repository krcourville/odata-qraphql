import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ApiClientService } from './services/api-client.service';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { LoginPromptComponent } from './components/login-prompt/login-prompt.component';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    LoginStatusComponent,
    LoginPromptComponent,
    DashboardPageComponent
  ],
  entryComponents: [
    LoginPromptComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [
    ApiClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
