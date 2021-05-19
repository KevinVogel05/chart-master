import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieJsComponent } from './pie-js.component';

describe('PieJsComponent', () => {
  let component: PieJsComponent;
  let fixture: ComponentFixture<PieJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
