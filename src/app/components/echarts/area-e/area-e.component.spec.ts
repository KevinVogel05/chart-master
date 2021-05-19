import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEComponent } from './area-e.component';

describe('AreaEComponent', () => {
  let component: AreaEComponent;
  let fixture: ComponentFixture<AreaEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
