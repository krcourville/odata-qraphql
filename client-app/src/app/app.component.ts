import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './services/api-client.service';
import { FlightResponse } from './interfaces';
import { AllFlights } from './queries';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginPromptComponent } from './components/login-prompt/login-prompt.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  flights: FlightResponse[];

  constructor(
    private apiClient: ApiClientService,
    private modalService: BsModalService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.apiClient
      .query(AllFlights)
      .subscribe(res => this.flights = res.data.getFlights);
  }

  onLoginClick() {
    this.modalService.show(LoginPromptComponent);
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  get userId() {
    return this.authService.userId;
  }
}
