import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProductoSubsanarDetalleComponent } from './supervisor-producto-subsanar-detalle.component';

describe('SupervisorProductoSubsanarDetalleComponent', () => {
  let component: SupervisorProductoSubsanarDetalleComponent;
  let fixture: ComponentFixture<SupervisorProductoSubsanarDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorProductoSubsanarDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProductoSubsanarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
