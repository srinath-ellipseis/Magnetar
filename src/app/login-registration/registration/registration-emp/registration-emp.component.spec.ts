import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEmpComponent } from './registration-emp.component';

describe('RegistrationEmpComponent', () => {
  let component: RegistrationEmpComponent;
  let fixture: ComponentFixture<RegistrationEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
