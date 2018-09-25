import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FlightResponse } from '../../interfaces';
import { FlightsStoreService } from '../../core-services/flights-store.service';
import { FlightAction } from '../../components';
import { AuthService } from '../../core-services';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  flights$: Observable<FlightResponse[]>;

  constructor(
    private store: FlightsStoreService,
    private auth: AuthService
  ) {
    this.flights$ = this.store.flights$;
  }

  ngOnInit(): void {
    this.store.load();
  }

  onFlightAction(action: FlightAction) {
    switch (action.type) {
      case 'REQUEST_RESERVATION': {
        this.store.reserveFlight({
          userId: this.auth.userId,
          flightNo: action.flight.flightNo
        });
        break;
      }
    }
  }

}
