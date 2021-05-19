import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarEComponent } from './radar-e.component';

describe('RadarEComponent', () => {
  let component: RadarEComponent;
  let fixture: ComponentFixture<RadarEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
