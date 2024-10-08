import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularDosisComponent } from './calcular-dosis.component';

describe('CalcularDosisComponent', () => {
  let component: CalcularDosisComponent;
  let fixture: ComponentFixture<CalcularDosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcularDosisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularDosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
