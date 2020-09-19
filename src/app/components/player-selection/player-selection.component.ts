import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css']
})
export class PlayerSelectionComponent implements OnInit {
  playerSelectForm: FormGroup = this.fb.group({
    currentPlayerSelection: ['', Validators.compose([Validators.required])]
  });

  playerOptions: string[] = ['Harry', 'Ron', 'Hermione', 'Neville'];
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private backendApi: BackendApiService) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    console.log(gameId);
  }


  submitPlayerSelection() {
    // tell svc that player is selected
    this.playerSelectForm.disable();
  }

}
