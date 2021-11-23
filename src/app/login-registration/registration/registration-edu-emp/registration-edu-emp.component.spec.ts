import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEduEmpComponent } from './registration-edu-emp.component';

describe('RegistrationEduEmpComponent', () => {
  let component: RegistrationEduEmpComponent;
  let fixture: ComponentFixture<RegistrationEduEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationEduEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationEduEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
