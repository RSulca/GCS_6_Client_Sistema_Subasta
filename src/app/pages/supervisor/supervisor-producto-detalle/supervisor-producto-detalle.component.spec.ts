import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProductoDetalleComponent } from './supervisor-producto-detalle.component';

describe('SupervisorProductoDetalleComponent', () => {
  let component: SupervisorProductoDetalleComponent;
  let fixture: ComponentFixture<SupervisorProductoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorProductoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProductoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
