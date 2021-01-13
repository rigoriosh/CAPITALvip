import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaShared1Component } from './prueba-shared1.component';

describe('PruebaShared1Component', () => {
  let component: PruebaShared1Component;
  let fixture: ComponentFixture<PruebaShared1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaShared1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaShared1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
