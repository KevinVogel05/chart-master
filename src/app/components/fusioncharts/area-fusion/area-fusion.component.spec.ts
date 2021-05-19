import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFusionComponent } from './area-fusion.component';

describe('AreaFusionComponent', () => {
  let component: AreaFusionComponent;
  let fixture: ComponentFixture<AreaFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaFusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
