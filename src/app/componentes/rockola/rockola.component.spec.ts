import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockolaComponent } from './rockola.component';

describe('RockolaComponent', () => {
  let component: RockolaComponent;
  let fixture: ComponentFixture<RockolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
