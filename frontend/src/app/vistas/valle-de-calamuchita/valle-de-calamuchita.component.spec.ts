import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValleDeCalamuchitaComponent } from './valle-de-calamuchita.component';

describe('ValleDeCalamuchitaComponent', () => {
  let component: ValleDeCalamuchitaComponent;
  let fixture: ComponentFixture<ValleDeCalamuchitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValleDeCalamuchitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValleDeCalamuchitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
