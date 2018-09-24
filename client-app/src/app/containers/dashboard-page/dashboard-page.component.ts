import { Component, OnInit } from '@angular/core';
import { FlightResponse } from '../../interfaces';
import { ApiClientService } from '../../core-services';
import { FlightsStoreService } from '../../core-services/flights-store.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  flights$: Observable<FlightResponse[]>;

  constructor(
    private store: FlightsStoreService
  ) {
    this.flights$ = this.store.flights$;
  }

  ngOnInit(): void {
    this.store.load();
  }

}
