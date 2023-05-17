import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteTuristicoTraslasierraComponent } from './paquete-turistico-traslasierra.component';

describe('PaqueteTuristicoTraslasierraComponent', () => {
  let component: PaqueteTuristicoTraslasierraComponent;
  let fixture: ComponentFixture<PaqueteTuristicoTraslasierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteTuristicoTraslasierraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqueteTuristicoTraslasierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
