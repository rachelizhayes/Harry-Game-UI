import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsCardsComponent } from './hogwarts-cards.component';

describe('HogwartsCardsComponent', () => {
  let component: HogwartsCardsComponent;
  let fixture: ComponentFixture<HogwartsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogwartsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
