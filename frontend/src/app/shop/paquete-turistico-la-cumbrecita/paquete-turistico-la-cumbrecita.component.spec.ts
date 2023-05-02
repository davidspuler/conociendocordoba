import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteTuristicoLaCumbrecitaComponent } from './paquete-turistico-la-cumbrecita.component';

describe('PaqueteTuristicoLaCumbrecitaComponent', () => {
  let component: PaqueteTuristicoLaCumbrecitaComponent;
  let fixture: ComponentFixture<PaqueteTuristicoLaCumbrecitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteTuristicoLaCumbrecitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqueteTuristicoLaCumbrecitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
