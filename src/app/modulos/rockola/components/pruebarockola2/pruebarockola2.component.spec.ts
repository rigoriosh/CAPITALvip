import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pruebarockola2Component } from './pruebarockola2.component';

describe('Pruebarockola2Component', () => {
  let component: Pruebarockola2Component;
  let fixture: ComponentFixture<Pruebarockola2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pruebarockola2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pruebarockola2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
