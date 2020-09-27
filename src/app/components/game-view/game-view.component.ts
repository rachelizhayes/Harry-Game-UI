import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  gameState;
  currentPlayer; // TODO: somehow get this from session storage
  otherPlayers;

  constructor(private route: ActivatedRoute, private backendApi: BackendApiService) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.backendCall(gameId);
    this.separateCurrentPlayerFromOthers();
  }

  backendCall(gameId) {
    console.log('in backend call')
    this.backendApi.getGameState(gameId).subscribe(response => {
      this.gameState = response;
    }, error => {
      console.error(error);
    })
  }

  separateCurrentPlayerFromOthers() {
    console.log(this.gameState?.players);
    this.currentPlayer = this.gameState?.players.slice(0, 1);
    this.otherPlayers = this.gameState?.players.slice(1);
  }

}
