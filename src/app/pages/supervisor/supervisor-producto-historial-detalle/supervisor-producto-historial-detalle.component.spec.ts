import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProductoHistorialDetalleComponent } from './supervisor-producto-historial-detalle.component';

describe('SupervisorProductoHistorialDetalleComponent', () => {
  let component: SupervisorProductoHistorialDetalleComponent;
  let fixture: ComponentFixture<SupervisorProductoHistorialDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorProductoHistorialDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProductoHistorialDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
