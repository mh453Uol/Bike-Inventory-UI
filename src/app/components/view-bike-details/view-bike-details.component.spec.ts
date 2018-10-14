import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBikeDetailsComponent } from './view-bike-details.component';

describe('ViewBikeDetailsComponent', () => {
  let component: ViewBikeDetailsComponent;
  let fixture: ComponentFixture<ViewBikeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBikeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBikeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
