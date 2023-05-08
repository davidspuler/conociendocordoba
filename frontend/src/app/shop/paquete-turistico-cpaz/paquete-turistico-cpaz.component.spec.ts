import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteTuristicoCpazComponent } from './paquete-turistico-cpaz.component';

describe('PaqueteTuristicoCpazComponent', () => {
  let component: PaqueteTuristicoCpazComponent;
  let fixture: ComponentFixture<PaqueteTuristicoCpazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteTuristicoCpazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqueteTuristicoCpazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
