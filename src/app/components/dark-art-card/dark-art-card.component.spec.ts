import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkArtCardComponent } from './dark-art-card.component';

describe('DarkArtCardComponent', () => {
  let component: DarkArtCardComponent;
  let fixture: ComponentFixture<DarkArtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkArtCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkArtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
