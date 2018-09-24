import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { ComponentsModule } from '../components';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  DashboardPageComponent,
  SigninOidcComponent
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ContainersModule { }
