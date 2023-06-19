import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesTuristicosComponent } from './paquetes-turisticos.component';

describe('PaquetesTuristicosComponent', () => {
  let component: PaquetesTuristicosComponent;
  let fixture: ComponentFixture<PaquetesTuristicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaquetesTuristicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaquetesTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
