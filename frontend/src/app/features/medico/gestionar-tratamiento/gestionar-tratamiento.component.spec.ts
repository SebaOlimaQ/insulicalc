import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarTratamientoComponent } from './gestionar-tratamiento.component';

describe('GestionarTratamientoComponent', () => {
  let component: GestionarTratamientoComponent;
  let fixture: ComponentFixture<GestionarTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionarTratamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
