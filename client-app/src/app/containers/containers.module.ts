import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { ComponentsModule } from '../components';

const COMPONENTS = [
  DashboardPageComponent,
  SigninOidcComponent
];

@NgModule({
  imports: [
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
