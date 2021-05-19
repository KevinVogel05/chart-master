import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutFusionComponent } from './doughnut-fusion.component';

describe('DoughnutFusionComponent', () => {
  let component: DoughnutFusionComponent;
  let fixture: ComponentFixture<DoughnutFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutFusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
