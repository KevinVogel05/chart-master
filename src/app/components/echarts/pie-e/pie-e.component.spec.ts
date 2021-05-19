import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieEComponent } from './pie-e.component';

describe('PieEComponent', () => {
  let component: PieEComponent;
  let fixture: ComponentFixture<PieEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
