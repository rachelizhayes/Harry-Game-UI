import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  constructor(private backendApi: BackendApiService) { }

  ngOnInit(): void {
    this.backendCall();
  }

  backendCall() {
    console.log('in backend call')
    this.backendApi.getGameState().subscribe( response => {
      console.log(response);
    }, error => {
      console.error(error);
    })
  }

}
