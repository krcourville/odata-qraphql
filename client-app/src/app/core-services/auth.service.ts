import { Injectable } from '@angular/core';

import { UserManager, User } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId: string = null;

  userManager: UserManager;

  constructor() {
    this.userManager = new UserManager({
      authority: 'http://localhost:3000',
      client_id: 'client-app',
      redirect_uri: 'https://testapp:4200/signin-oidc',
      response_type: 'id_token',
      scope: 'openid',
      post_logout_redirect_uri: 'https://testapp:4200/signout-oidc'
    });

    this.loadPreviousLogin();
  }

  async loadPreviousLogin() {
    const user = await this.userManager.getUser();
    if (user != null) {
      this.loadUser(user);
    }
  }

  get isAuthenticated() {
    return this.userId != null;
  }

  login() {
    this.userManager.signinRedirect();
  }

  async processLogin() {
    const user = await this.userManager.signinRedirectCallback();
    this.loadUser(user);
  }

  async logout() {
    await this.userManager.removeUser();
    this.userId = null;
  }

  private loadUser(user: User) {
    this.userId = user.profile.sub;
  }
}
