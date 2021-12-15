import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPromocionCursoComponent } from './ver-promocion-curso.component';

describe('VerPromocionCursoComponent', () => {
  let component: VerPromocionCursoComponent;
  let fixture: ComponentFixture<VerPromocionCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPromocionCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPromocionCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
