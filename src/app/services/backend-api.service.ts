import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Game } from '../models/game.model';
import { strict } from 'assert';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  constructor(private http: HttpClient) {}

  getGameState(gameId: number): any {
    const url = 'http://70.120.3.133:5000/game/' + gameId;
    return this.http.get(url);
  }

  createNewGame(gameConfigs: any): any {
    const url = 'http://70.120.3.133:5000/game';
    return this.http.post(url, gameConfigs);
  }

  getChosenPlayers(gameId: any): any {
    const url = 'http://70.120.3.133:5000/game/' + gameId + '/playerOptions';
    return this.http.get(url);
  }
  submitChosenPlayers(gameId: any, id: any): any {
    const url = 'http://70.120.3.133:5000/game/' + gameId + '/playerOptions';
    var jsonObj = {};
    jsonObj['playerId'] = id;
    jsonObj['ability'] = 1;
    jsonObj['proficiency'] = 1;
    return this.http.post(url, jsonObj);
  }
}
