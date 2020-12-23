import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FceComponent } from './fce.component';

describe('FceComponent', () => {
  let component: FceComponent;
  let fixture: ComponentFixture<FceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
