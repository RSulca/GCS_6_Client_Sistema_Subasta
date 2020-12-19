import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProductoHistorialComponent } from './supervisor-producto-historial.component';

describe('SupervisorProductoHistorialComponent', () => {
  let component: SupervisorProductoHistorialComponent;
  let fixture: ComponentFixture<SupervisorProductoHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorProductoHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProductoHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
