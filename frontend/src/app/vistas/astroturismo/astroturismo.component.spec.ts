import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroturismoComponent } from './astroturismo.component';

describe('AstroturismoComponent', () => {
  let component: AstroturismoComponent;
  let fixture: ComponentFixture<AstroturismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroturismoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroturismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
