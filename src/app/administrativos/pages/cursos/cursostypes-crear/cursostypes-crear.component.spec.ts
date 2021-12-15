import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursostypesCrearComponent } from './cursostypes-crear.component';

describe('CursostypesCrearComponent', () => {
  let component: CursostypesCrearComponent;
  let fixture: ComponentFixture<CursostypesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursostypesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursostypesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
