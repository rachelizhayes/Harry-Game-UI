import { Component, Input, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  gameState;
  constructor(private backendApi: BackendApiService) { }

  ngOnInit(): void {
   
  }

  makeGameStateCall() {
    this.backendApi.getGameState().subscribe( response => {
      this.gameState = response;
    })
  }

}
