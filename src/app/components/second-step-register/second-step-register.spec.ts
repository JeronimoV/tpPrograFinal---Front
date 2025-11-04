import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepRegister } from './second-step-register';

describe('SecondStepRegister', () => {
  let component: SecondStepRegister;
  let fixture: ComponentFixture<SecondStepRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondStepRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondStepRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
