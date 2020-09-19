import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getGameState() {
    //points to my local
    return this.http.get('http://70.120.3.133:5000/game/TEST');
   

    // points to Cam's desktop
    // return this.http.get('http://192.168.1.13:5000/');
  }
}