import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValleDeParavachascaComponent } from './valle-de-paravachasca.component';

describe('ValleDeParavachascaComponent', () => {
  let component: ValleDeParavachascaComponent;
  let fixture: ComponentFixture<ValleDeParavachascaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValleDeParavachascaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValleDeParavachascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
