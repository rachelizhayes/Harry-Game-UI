import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  newGameForm: FormGroup = this.fb.group({
    numPlayers: [2, Validators.compose([Validators.required])],
    numLocations: [3, Validators.compose([Validators.required])],
    numVillains: [8, Validators.compose([Validators.required])],
  });
  numPlayerOptions: number[] = [2,3,4,5];
  numLocationOptions: number[] = [2,3,4,5];
  numVillainOptions: number[] = [5,6,7,8,9,10,11,12];

  constructor(private fb: FormBuilder, 
    private backendApi: BackendApiService, 
    private router: Router) { }


  ngOnInit(): void {
  }

  createGame() {
    // TODO: make post call to game endpoint here and show the id later
    this.newGameForm.disable();
    this.backendApi.createNewGame(this.newGameForm.value).subscribe( game => {
      console.log(game);
      const gameId = game ? game.id : null;
      this.router.navigate(['player-selection', gameId ]);
    })
  }

}
