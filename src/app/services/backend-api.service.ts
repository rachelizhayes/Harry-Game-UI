import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getGameState() {
    //points to my local
    return this.http.get('http://localhost:32776/');
   

    // points to Cam's desktop
    // return this.http.get('http://192.168.1.13:5000/');
  }
}