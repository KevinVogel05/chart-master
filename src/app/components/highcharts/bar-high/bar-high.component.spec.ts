import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHighComponent } from './bar-high.component';

describe('BarHighComponent', () => {
  let component: BarHighComponent;
  let fixture: ComponentFixture<BarHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
