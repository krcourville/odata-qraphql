import { Component, OnInit } from '@angular/core';
import { FlightResponse } from '../../interfaces';
import { AllFlights } from '../../queries';
import { ApiClientService } from '../../core-services';

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
