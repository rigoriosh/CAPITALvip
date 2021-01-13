import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pruebarockola1Component } from './pruebarockola1.component';

describe('Pruebarockola1Component', () => {
  let component: Pruebarockola1Component;
  let fixture: ComponentFixture<Pruebarockola1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pruebarockola1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pruebarockola1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
