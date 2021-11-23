import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPreviewComponent } from './registration-preview.component';

describe('RegistrationPreviewComponent', () => {
  let component: RegistrationPreviewComponent;
  let fixture: ComponentFixture<RegistrationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
