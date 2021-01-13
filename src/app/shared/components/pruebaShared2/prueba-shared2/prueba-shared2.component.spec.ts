import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaShared2Component } from './prueba-shared2.component';

describe('PruebaShared2Component', () => {
  let component: PruebaShared2Component;
  let fixture: ComponentFixture<PruebaShared2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaShared2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaShared2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
