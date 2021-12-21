import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingAndFinancialComponent } from './banking-and-financial.component';

describe('BankingAndFinancialComponent', () => {
  let component: BankingAndFinancialComponent;
  let fixture: ComponentFixture<BankingAndFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingAndFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingAndFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
