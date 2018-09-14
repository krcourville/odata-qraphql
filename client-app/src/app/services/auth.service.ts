import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId = null;

  constructor() { }

  get isAuthenticated() {
    return this.userId != null;
  }
}
