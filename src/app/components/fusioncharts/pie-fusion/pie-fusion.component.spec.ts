import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieFusionComponent } from './pie-fusion.component';

describe('PieFusionComponent', () => {
  let component: PieFusionComponent;
  let fixture: ComponentFixture<PieFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieFusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
