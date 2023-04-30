import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorteYNoroesteComponent } from './norte-y-noroeste.component';

describe('NorteYNoroesteComponent', () => {
  let component: NorteYNoroesteComponent;
  let fixture: ComponentFixture<NorteYNoroesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorteYNoroesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorteYNoroesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
