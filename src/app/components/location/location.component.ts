import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationName: String;
  locationSlots: number;
  villainControl: number;
  constructor(private backendApi: BackendApiService) { }

  ngOnInit(): void {
     // TODO update this to be dynamic
    this.backendApi.getGameState(123).subscribe( gameState => {
      console.log(gameState);
      // this.locationName = gameState.location.name;
      // this.locationSlots = gameState.location.totalSlots;
      // this.villainControl = gameState.location.villainControl;
    })
  }

// ],
// "id": "TEST",
// "location": {
//   "name": "Castle Gates",
//   "totalSlots": 5,
//   "villainControl": 0
// },

}
