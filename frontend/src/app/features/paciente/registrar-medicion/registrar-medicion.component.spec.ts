import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMedicionComponent } from './registrar-medicion.component';

describe('RegistrarMedicionComponent', () => {
  let component: RegistrarMedicionComponent;
  let fixture: ComponentFixture<RegistrarMedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarMedicionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarMedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
