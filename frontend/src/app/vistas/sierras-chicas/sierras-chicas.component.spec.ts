import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SierrasChicasComponent } from './sierras-chicas.component';

describe('SierrasChicasComponent', () => {
  let component: SierrasChicasComponent;
  let fixture: ComponentFixture<SierrasChicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SierrasChicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SierrasChicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
