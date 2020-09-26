import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit {
  gameId;
  gameState;
  constructor(
    private route: ActivatedRoute,
    private backendApi: BackendApiService
  ) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id');
    this.backendApi.getGameState(this.gameId).subscribe((response) => {
      this.gameState = response;
    });
  }
}
