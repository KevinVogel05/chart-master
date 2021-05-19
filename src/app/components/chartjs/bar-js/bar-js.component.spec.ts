import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarJsComponent } from './bar-js.component';

describe('BarJsComponent', () => {
  let component: BarJsComponent;
  let fixture: ComponentFixture<BarJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
