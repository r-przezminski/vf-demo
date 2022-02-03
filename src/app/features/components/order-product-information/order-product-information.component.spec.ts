import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductInformationComponent } from './order-product-information.component';

describe('OrderProductInformationComponent', () => {
  let component: OrderProductInformationComponent;
  let fixture: ComponentFixture<OrderProductInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderProductInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
