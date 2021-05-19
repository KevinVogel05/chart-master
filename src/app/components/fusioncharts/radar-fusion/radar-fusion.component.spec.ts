import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarFusionComponent } from './radar-fusion.component';

describe('RadarFusionComponent', () => {
  let component: RadarFusionComponent;
  let fixture: ComponentFixture<RadarFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarFusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
