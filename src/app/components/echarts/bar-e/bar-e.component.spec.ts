import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarEComponent } from './bar-e.component';

describe('BarEComponent', () => {
  let component: BarEComponent;
  let fixture: ComponentFixture<BarEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
