import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValleDeTraslasierrasComponent } from './valle-de-traslasierras.component';

describe('ValleDeTraslasierrasComponent', () => {
  let component: ValleDeTraslasierrasComponent;
  let fixture: ComponentFixture<ValleDeTraslasierrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValleDeTraslasierrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValleDeTraslasierrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
