import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getGameState() {
    return this.http.get('http://localhost:32769/');
  }
}