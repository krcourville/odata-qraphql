import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { CoreServicesModule } from './core-services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ComponentsModule,
    CoreServicesModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
