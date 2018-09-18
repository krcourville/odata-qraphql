import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from '../containers/dashboard-page/dashboard-page.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
  },
  {
    path: '/signin-oidc',
    // TODO
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    }),
  ],
  declarations: []
})
export class AppRoutingModule { }
