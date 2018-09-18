import { Component, OnInit } from '@angular/core';
import { FlightResponse } from './interfaces';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  flights: FlightResponse[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.authService.login();
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  get userId() {
    return this.authService.userId;
  }
}
