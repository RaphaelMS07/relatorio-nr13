import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLayoutNr13Component } from './print-layout-nr13.component';

describe('PrintLayoutNr13Component', () => {
  let component: PrintLayoutNr13Component;
  let fixture: ComponentFixture<PrintLayoutNr13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintLayoutNr13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintLayoutNr13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
