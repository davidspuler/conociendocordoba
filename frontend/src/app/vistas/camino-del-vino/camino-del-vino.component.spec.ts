import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminoDelVinoComponent } from './camino-del-vino.component';

describe('CaminoDelVinoComponent', () => {
  let component: CaminoDelVinoComponent;
  let fixture: ComponentFixture<CaminoDelVinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminoDelVinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminoDelVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
