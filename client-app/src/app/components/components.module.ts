import { NgModule } from '@angular/core';
import { FlightListComponent } from './flight-list/flight-list.component';
import { LoginStatusComponent } from './login-status/login-status.component';
import { CoreServicesModule } from '../core-services';
import { DirectivesModule } from '../directives';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  FlightListComponent,
  LoginStatusComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreServicesModule,
    DirectivesModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    COMPONENTS
  ]
})
export class ComponentsModule { }
