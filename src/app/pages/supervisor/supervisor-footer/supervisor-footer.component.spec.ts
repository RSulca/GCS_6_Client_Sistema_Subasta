import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorFooterComponent } from './supervisor-footer.component';

describe('SupervisorFooterComponent', () => {
  let component: SupervisorFooterComponent;
  let fixture: ComponentFixture<SupervisorFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
