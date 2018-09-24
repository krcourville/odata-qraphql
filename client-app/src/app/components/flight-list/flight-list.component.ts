import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlightResponse } from '../../interfaces';

export interface FlightAction {
  type: 'REQUEST_RESERVATION';
  flight: FlightResponse;
}

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  @Input()
  items: FlightResponse[];

  @Output()
  action = new EventEmitter<FlightAction>();

  constructor() { }

  ngOnInit() {
  }

  onReserveClick(flight: FlightResponse) {
    this.action.emit({
      type: 'REQUEST_RESERVATION',
      flight
    });
  }

}
