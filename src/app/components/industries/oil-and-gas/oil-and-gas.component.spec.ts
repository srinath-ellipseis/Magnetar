import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilAndGasComponent } from './oil-and-gas.component';

describe('OilAndGasComponent', () => {
  let component: OilAndGasComponent;
  let fixture: ComponentFixture<OilAndGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilAndGasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OilAndGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
