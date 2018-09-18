import { Component, OnInit } from '@angular/core';
import { FlightResponse } from '../../interfaces';
import { ApiClientService } from '../../services/api-client.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../../services/auth.service';
import { AllFlights } from '../../queries';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  flights: FlightResponse[];

  constructor(
    private apiClient: ApiClientService
  ) { }

  ngOnInit(): void {
    this.apiClient
      .query(AllFlights)
      .subscribe(res => this.flights = res.data.getFlights);
  }

}
