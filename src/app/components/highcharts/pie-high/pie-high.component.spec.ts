import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieHighComponent } from './pie-high.component';

describe('PieHighComponent', () => {
  let component: PieHighComponent;
  let fixture: ComponentFixture<PieHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
