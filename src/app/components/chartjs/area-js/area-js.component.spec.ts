import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaJsComponent } from './area-js.component';

describe('AreaJsComponent', () => {
  let component: AreaJsComponent;
  let fixture: ComponentFixture<AreaJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
