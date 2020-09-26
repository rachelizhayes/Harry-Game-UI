import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css'],
})
export class EncounterComponent implements OnInit {
  @Input() encounter;
  constructor() {}

  ngOnInit(): void {}
}
