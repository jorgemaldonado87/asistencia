import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomarListaComponent } from './tomar-lista.component';

describe('TomarListaComponent', () => {
  let component: TomarListaComponent;
  let fixture: ComponentFixture<TomarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomarListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
