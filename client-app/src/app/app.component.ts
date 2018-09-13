import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './services/api-client.service';
import { FlightResponse } from './interfaces';
import { AllFlights } from './queries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  flights: FlightResponse[];

  constructor(private apiClient: ApiClientService) { }

  ngOnInit(): void {
    this.apiClient
      .query(AllFlights)
      .subscribe(res => this.flights = res.data.getFlights);
  }
}
