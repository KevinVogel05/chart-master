import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutJsComponent } from './doughnut-js.component';

describe('DoughnutJsComponent', () => {
  let component: DoughnutJsComponent;
  let fixture: ComponentFixture<DoughnutJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
