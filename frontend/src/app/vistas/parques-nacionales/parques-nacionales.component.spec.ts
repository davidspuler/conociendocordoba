import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParquesNacionalesComponent } from './parques-nacionales.component';

describe('ParquesNacionalesComponent', () => {
  let component: ParquesNacionalesComponent;
  let fixture: ComponentFixture<ParquesNacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParquesNacionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParquesNacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
