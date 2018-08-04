import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen1Component } from './gen1.component';

describe('Gen1Component', () => {
  let component: Gen1Component;
  let fixture: ComponentFixture<Gen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
