import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  numVillainOptions: number[] = [2,3,4,5];

  constructor(private fb: FormBuilder, private backendApi: BackendApiService) { }


  ngOnInit(): void {
  }

  createGame() {
    // TODO: make post call to game endpoint here and show the id later
    // this.newGameForm.disable();
    console.log(this.newGameForm.controls);
  }

}
