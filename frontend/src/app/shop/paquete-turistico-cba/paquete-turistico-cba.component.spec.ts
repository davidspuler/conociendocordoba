import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteTuristicoCbaComponent } from './paquete-turistico-cba.component';

describe('PaqueteTuristicoCbaComponent', () => {
  let component: PaqueteTuristicoCbaComponent;
  let fixture: ComponentFixture<PaqueteTuristicoCbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteTuristicoCbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqueteTuristicoCbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
