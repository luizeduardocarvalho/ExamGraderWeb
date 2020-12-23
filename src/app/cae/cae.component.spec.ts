import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaeComponent } from './cae.component';

describe('CaeComponent', () => {
  let component: CaeComponent;
  let fixture: ComponentFixture<CaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
