import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoAventuraComponent } from './turismo-aventura.component';

describe('TurismoAventuraComponent', () => {
  let component: TurismoAventuraComponent;
  let fixture: ComponentFixture<TurismoAventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismoAventuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismoAventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
