import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getGameState(gameId: number) {
    const url = 'http://70.120.3.133:5000/game/' + gameId;
    return this.http.get(url);
  }

  createNewGame(gameConfigs: any): any {
    const url = 'http://70.120.3.133:5000/game';
    return this.http.post(url, gameConfigs);
  }
}