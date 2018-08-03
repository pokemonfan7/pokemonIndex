import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen2Component } from './gen2.component';

describe('Gen2Component', () => {
  let component: Gen2Component;
  let fixture: ComponentFixture<Gen2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gen2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
