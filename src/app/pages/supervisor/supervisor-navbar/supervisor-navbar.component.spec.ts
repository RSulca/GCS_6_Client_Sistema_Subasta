import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorNavbarComponent } from './supervisor-navbar.component';

describe('SupervisorNavbarComponent', () => {
  let component: SupervisorNavbarComponent;
  let fixture: ComponentFixture<SupervisorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
