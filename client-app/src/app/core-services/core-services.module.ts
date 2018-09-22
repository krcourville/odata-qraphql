import { NgModule } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { AuthService } from './auth.service';
import { OidcGuard } from './oidc.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ApiClientService,
    AuthService,
    OidcGuard
  ]
})
export class CoreServicesModule { }
