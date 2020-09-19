import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.css']
})
export class PlayerBoardComponent implements OnInit {
  @Input() currentPlayerBoard: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
