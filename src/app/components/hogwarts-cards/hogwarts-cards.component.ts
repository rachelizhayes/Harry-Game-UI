import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hogwarts-cards',
  templateUrl: './hogwarts-cards.component.html',
  styleUrls: ['./hogwarts-cards.component.css'],
})
export class HogwartsCardsComponent implements OnInit {
  @Input() cards: any[];
  constructor() {}

  ngOnInit(): void {}
}
