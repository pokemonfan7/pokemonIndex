import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen4Component } from './gen4.component';

describe('Gen4Component', () => {
  let component: Gen4Component;
  let fixture: ComponentFixture<Gen4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gen4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gen4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
