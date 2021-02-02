import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAmountComponent } from './report-amount.component';

describe('ReportAmountComponent', () => {
  let component: ReportAmountComponent;
  let fixture: ComponentFixture<ReportAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
