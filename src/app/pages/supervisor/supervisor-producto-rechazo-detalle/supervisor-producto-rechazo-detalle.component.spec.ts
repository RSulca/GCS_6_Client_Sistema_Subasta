import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProductoRechazoDetalleComponent } from './supervisor-producto-rechazo-detalle.component';

describe('SupervisorProductoRechazoDetalleComponent', () => {
  let component: SupervisorProductoRechazoDetalleComponent;
  let fixture: ComponentFixture<SupervisorProductoRechazoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorProductoRechazoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProductoRechazoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
