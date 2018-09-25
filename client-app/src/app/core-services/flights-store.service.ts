import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiClientService } from './api-client.service';
import { ApiResponse, FlightResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FlightsStoreService {


  private _store$ = new BehaviorSubject<ApiResponse>(null);

  constructor(
    private apiClient: ApiClientService
  ) {
  }

  get flights$(): Observable<FlightResponse[]> {
    return this._store$.pipe(
      map(store => {
        return store == null ?
          [] :
          store.data.flights;
      })
    );
  }

  load() {
    this.apiClient
      .query(`
      {
        flights{
          flightNo
          start {
            airportCode
            time
          }
          end {
            airportCode
            time
          }
          statusId
          status
        }
      }
    `)
      .subscribe(res => this._store$.next(res));
  }

  reserveFlight(options: { userId: string; flightNo: string; }): any {
    const variables = options;
    this.apiClient.query(`
      mutation {
        reserveFlight(flightNo: $flightNo, userId: $userId) {
          id
          userId
          flightNo
        }
      }
    `, variables);
  }
}
