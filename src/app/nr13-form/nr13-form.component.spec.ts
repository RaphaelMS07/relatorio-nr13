import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr13FormComponent } from './nr13-form.component';

describe('Nr13FormComponent', () => {
  let component: Nr13FormComponent;
  let fixture: ComponentFixture<Nr13FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr13FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr13FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
