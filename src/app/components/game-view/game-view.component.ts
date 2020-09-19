import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  playerSelectForm: FormGroup = this.fb.group({
    currentPlayerSelection: ['', Validators.compose([Validators.required])]
  });

  playerOptions: string[] = ['Harry', 'Ron', 'Hermione', 'Neville'];
  constructor(private fb: FormBuilder, private backendApi: BackendApiService) { }

  ngOnInit(): void {
    this.backendCall();
    console.log(this.playerSelectForm);
  }

  backendCall() {
    console.log('in backend call')
    this.backendApi.getGameState().subscribe( response => {
      console.log(response);
    }, error => {
      console.error(error);
    })
  }

  submitPlayerSelection() {
    // tell svc that player is selected
    this.playerSelectForm.disable();
  }

}
