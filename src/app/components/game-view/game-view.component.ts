import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private backendApi: BackendApiService) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.backendCall(gameId);
  }

  backendCall(gameId) {
    console.log('in backend call')
    this.backendApi.getGameState(gameId).subscribe( response => {
      console.log(response);
    }, error => {
      console.error(error);
    })
  }

}
