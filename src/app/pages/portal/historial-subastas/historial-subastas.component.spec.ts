import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialSubastasComponent } from './historial-subastas.component';

describe('HistorialSubastasComponent', () => {
  let component: HistorialSubastasComponent;
  let fixture: ComponentFixture<HistorialSubastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialSubastasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialSubastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
