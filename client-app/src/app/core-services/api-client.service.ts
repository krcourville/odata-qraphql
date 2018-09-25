import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces';

const BaseUrl = 'http://localhost:5000';

@Injectable()
export class ApiClientService {
  constructor(private http: HttpClient) {

  }

  query(gql: string, variables: Object = {}): Observable<ApiResponse> {
    console.log('REQUEST', gql, variables);
    return this.http.post<ApiResponse>(BaseUrl, { query: gql, variables })
      .pipe(
        tap(res => console.log('RES', res)),
        catchError(err => {
          console.error('ERR', err);
          return throwError(err);
        })
      );
  }
}
