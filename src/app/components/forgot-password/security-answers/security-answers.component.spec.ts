import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAnswersComponent } from './security-answers.component';

describe('SecurityAnswersComponent', () => {
  let component: SecurityAnswersComponent;
  let fixture: ComponentFixture<SecurityAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityAnswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
