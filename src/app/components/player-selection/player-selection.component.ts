import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css']
})
export class PlayerSelectionComponent implements OnInit {
  playerSelectForm: FormGroup = this.fb.group({
    currentPlayerSelection: ['', Validators.compose([Validators.required])]
  });

  playerOptions: string[] = [];
  playerDict = new Map<string, string>();
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private backendApi: BackendApiService,private router:Router) { }
 
  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    console.log(gameId);
    this.updatePlayerSelection()
    const source = interval(1000);
    const subscribe = source.subscribe(val => this.updatePlayerSelection());
  }

  updatePlayerSelection(){
    const gameId = this.route.snapshot.paramMap.get('id');
    this.backendApi.getChosenPlayers(gameId).subscribe(game => {
      //TODO Fix camerons code lol
      this.playerOptions = []
      for (var value of game){
        this.playerDict.set(value.Name,value.id);
        if(!value.Selected){
          this.playerOptions.push(value.Name)
        }
      }
      if (this.playerOptions.length < 3){
        this.router.navigate(['game', gameId ]);
      }
    })
  }

  
  submitPlayerSelection() {
    // tell svc that player is selected
    const gameId = this.route.snapshot.paramMap.get('id');
    this.backendApi.submitChosenPlayers(gameId,this.playerDict.get(this.playerSelectForm.controls.currentPlayerSelection.value)).subscribe(x => {
      this.updatePlayerSelection();
      this.playerSelectForm.disable();
      
    })
    
  }

}
