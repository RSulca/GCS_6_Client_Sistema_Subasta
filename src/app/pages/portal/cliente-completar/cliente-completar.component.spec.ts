import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCompletarComponent } from './cliente-completar.component';

describe('ClienteCompletarComponent', () => {
  let component: ClienteCompletarComponent;
  let fixture: ComponentFixture<ClienteCompletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCompletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCompletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
