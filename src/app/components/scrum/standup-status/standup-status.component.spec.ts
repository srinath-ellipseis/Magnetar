import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupStatusComponent } from './standup-status.component';

describe('StandupStatusComponent', () => {
  let component: StandupStatusComponent;
  let fixture: ComponentFixture<StandupStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandupStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
