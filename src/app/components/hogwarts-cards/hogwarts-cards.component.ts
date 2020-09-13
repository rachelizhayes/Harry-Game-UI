import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hogwarts-cards',
  templateUrl: './hogwarts-cards.component.html',
  styleUrls: ['./hogwarts-cards.component.css']
})
export class HogwartsCardsComponent implements OnInit {
  hogwartsCards = [
    {name:'Lumos', type:'Spell', description:'All heroes draw a card'},
    {name:'Accio', type:'Spell', description:'Search your discard pile for any card under 5 coins and put it in your hand'},
    {name:'Essence of Dettany', type:'Item', description:'Any one hero goes 2 hearts'},
    {name:'Wingardium Leviosa', type:'Spell', description:'Gain 1 coin. You may banish any card in your hand'},
    {name:'Quidditch Gear', type:'Item', description:'Gain 1 lightning and 1 heart'},
    {name:'Albus Dumbledore', type:'Ally', description:'All heroes gain 1 lightning, 1 heart, 1 coin, and draw a card'},
  ];
  constructor() { }

  ngOnInit(): void {
    //call to backend to get hogwarts cards available for purchase
  }

}
