import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDetailProductComponent } from './seller-detail-product.component';

describe('SellerDetailProductComponent', () => {
  let component: SellerDetailProductComponent;
  let fixture: ComponentFixture<SellerDetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDetailProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
