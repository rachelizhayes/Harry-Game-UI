import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  domain: string = 'http://198.199.74.215:2375';

  constructor(private http: HttpClient) { }

  getGameState(gameId: number): any {
    const url = this.domain + '/game/' + gameId;
    return this.http.get(url);
  }

  createNewGame(gameConfigs: any): any {
    const url = this.domain + '/game';
    return this.http.post(url, gameConfigs);
  }

  getChosenPlayers(gameId: any): any {
    const url = this.domain + '/game/' + gameId + '/playerOptions';
    return this.http.get(url);
  }
  submitChosenPlayers(gameId: any, id: any): any {
    const url = this.domain + '/game/' + gameId + '/playerOptions';
    var jsonObj = {};
    jsonObj['playerId'] = id;
    jsonObj['ability'] = 1;
    jsonObj['proficiency'] = 1;
    return this.http.post(url, jsonObj);
  }
}
