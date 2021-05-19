import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutEComponent } from './doughnut-e.component';

describe('DoughnutEComponent', () => {
  let component: DoughnutEComponent;
  let fixture: ComponentFixture<DoughnutEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
