import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFusionComponent } from './bar-fusion.component';

describe('BarFusionComponent', () => {
  let component: BarFusionComponent;
  let fixture: ComponentFixture<BarFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarFusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
