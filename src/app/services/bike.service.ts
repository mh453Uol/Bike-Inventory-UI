import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private _httpClient: HttpClient) { }

  getBikes() {
    return this._httpClient.get('/server/api/v1/bikes', httpOptions);
  }

}
