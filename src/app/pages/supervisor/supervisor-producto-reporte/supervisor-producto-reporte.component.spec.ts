import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProductoReporteComponent } from './supervisor-producto-reporte.component';

describe('SupervisorProductoReporteComponent', () => {
  let component: SupervisorProductoReporteComponent;
  let fixture: ComponentFixture<SupervisorProductoReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorProductoReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProductoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
