import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursostypesComponent } from './cursostypes.component';

describe('CursostypesComponent', () => {
  let component: CursostypesComponent;
  let fixture: ComponentFixture<CursostypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursostypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursostypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
