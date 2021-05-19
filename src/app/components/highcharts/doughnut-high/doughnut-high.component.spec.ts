import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutHighComponent } from './doughnut-high.component';

describe('DoughnutHighComponent', () => {
  let component: DoughnutHighComponent;
  let fixture: ComponentFixture<DoughnutHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
