import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaHighComponent } from './area-high.component';

describe('AreaHighComponent', () => {
  let component: AreaHighComponent;
  let fixture: ComponentFixture<AreaHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
