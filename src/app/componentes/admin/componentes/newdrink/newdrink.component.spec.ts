import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdrinkComponent } from './newdrink.component';

describe('NewdrinkComponent', () => {
  let component: NewdrinkComponent;
  let fixture: ComponentFixture<NewdrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
