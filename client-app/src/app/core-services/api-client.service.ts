import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces';

const BaseUrl = 'http://localhost:5000';

@Injectable()
export class ApiClientService {
  constructor(private http: HttpClient) {

  }

  query(gql: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(BaseUrl, { query: gql });
  }
}
