import { NgModule } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { AuthService } from './auth.service';
import { OidcGuard } from './oidc.guard';
import { HttpClientModule } from '@angular/common/http';
import { FlightsStoreService } from './flights-store.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ApiClientService,
    AuthService,
    OidcGuard,
    FlightsStoreService
  ]
})
export class CoreServicesModule { }
