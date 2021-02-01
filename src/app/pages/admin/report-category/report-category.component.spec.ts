import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCategoryComponent } from './report-category.component';

describe('ReportCategoryComponent', () => {
  let component: ReportCategoryComponent;
  let fixture: ComponentFixture<ReportCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
