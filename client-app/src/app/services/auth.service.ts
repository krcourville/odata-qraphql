import { Injectable } from '@angular/core';

import { UserManager } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId = null;

  userManager: UserManager;

  constructor() {
    this.userManager = new UserManager({
      authority: 'http://localhost:3000',
      client_id: 'client-app',
      redirect_uri: 'https://testapp:4200/signin-oidc',
      response_type: 'id_token',
      scope: 'openid'
    });
  }

  get isAuthenticated() {
    return this.userId != null;
  }

  login() {
    this.userManager.signinRedirect();
  }
}
