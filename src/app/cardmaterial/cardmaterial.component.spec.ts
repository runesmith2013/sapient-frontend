import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmaterialComponent } from './cardmaterial.component';

describe('CardmaterialComponent', () => {
  let component: CardmaterialComponent;
  let fixture: ComponentFixture<CardmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
