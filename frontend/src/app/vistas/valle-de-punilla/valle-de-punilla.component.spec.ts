import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValleDePunillaComponent } from './valle-de-punilla.component';

describe('ValleDePunillaComponent', () => {
  let component: ValleDePunillaComponent;
  let fixture: ComponentFixture<ValleDePunillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValleDePunillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValleDePunillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
