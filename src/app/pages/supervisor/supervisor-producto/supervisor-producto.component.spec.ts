import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProductoComponent } from './supervisor-producto.component';

describe('SupervisorProductoComponent', () => {
  let component: SupervisorProductoComponent;
  let fixture: ComponentFixture<SupervisorProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
