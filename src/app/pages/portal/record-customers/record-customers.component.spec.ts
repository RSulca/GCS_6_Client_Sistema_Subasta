import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCustomersComponent } from './record-customers.component';

describe('RecordCustomersComponent', () => {
  let component: RecordCustomersComponent;
  let fixture: ComponentFixture<RecordCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
