import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarHighComponent } from './radar-high.component';

describe('RadarHighComponent', () => {
  let component: RadarHighComponent;
  let fixture: ComponentFixture<RadarHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
