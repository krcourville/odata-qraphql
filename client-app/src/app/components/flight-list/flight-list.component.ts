import { Component, OnInit, Input } from '@angular/core';
import { FlightResponse } from '../../interfaces';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  @Input()
  items: FlightResponse[];

  constructor() { }

  ngOnInit() {
  }

}
