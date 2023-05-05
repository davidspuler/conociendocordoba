import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordobaCapitalComponent } from './cordoba-capital.component';

describe('CordobaCapitalComponent', () => {
  let component: CordobaCapitalComponent;
  let fixture: ComponentFixture<CordobaCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordobaCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CordobaCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
