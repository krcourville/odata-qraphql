import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from '../containers/dashboard-page/dashboard-page.component';
import { SigninOidcComponent } from '../containers/signin-oidc/signin-oidc.component';
import { OidcGuard } from '../services/oidc.guard';

const routes: Routes = [
  {
    path: 'signin-oidc',
    pathMatch: 'full',
    canActivate: [
      OidcGuard
    ],
    component: SigninOidcComponent,
  },
  {
    path: '',
    component: DashboardPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false
    }),
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    OidcGuard
  ]
})
export class AppRoutingModule { }
