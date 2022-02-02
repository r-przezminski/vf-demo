import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDividerComponent } from './account-divider.component';

describe('AccountDividerComponent', () => {
  let component: AccountDividerComponent;
  let fixture: ComponentFixture<AccountDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
