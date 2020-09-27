import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.css']
})
export class PlayerBoardComponent implements OnInit {
  @Input() playerInfo;
  playerHand;
  constructor() {

  }

  ngOnInit(): void {
    this.playerInfo = [
      {
        "ability": {
          "description": "Once Per game remove 2 from location",
          "title": "Third Task"
        },
        "coins": 0,
        "discardEmpty": true,
        "drawPileEmpty": false,
        "earnedAbilites": null,
        "hand": [],
        "health": 10,
        "lightning": 0,
        "name": [
          "Harry"
        ],
        "proficiency": {
          "description": "Once per turn, discard 5 coins",
          "title": "Flying Lessons"
        },
        "topPlayed": false
      }];
  }

  getPicName(index: number) {
    return this.playerInfo[0].name[0].toLowerCase();
  }

  getPlayerCards(index: number) {
    return this.playerInfo[0].hand;
  }

}
