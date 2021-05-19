import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarJsComponent } from './radar-js.component';

describe('RadarJsComponent', () => {
  let component: RadarJsComponent;
  let fixture: ComponentFixture<RadarJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
