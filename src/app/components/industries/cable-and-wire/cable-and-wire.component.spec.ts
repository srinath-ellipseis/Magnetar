import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableAndWireComponent } from './cable-and-wire.component';

describe('CableAndWireComponent', () => {
  let component: CableAndWireComponent;
  let fixture: ComponentFixture<CableAndWireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CableAndWireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CableAndWireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
