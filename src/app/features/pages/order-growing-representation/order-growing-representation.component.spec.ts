import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGrowingRepresentationComponent } from './order-growing-representation.component';

describe('OrderGrowingRepresentationComponent', () => {
  let component: OrderGrowingRepresentationComponent;
  let fixture: ComponentFixture<OrderGrowingRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderGrowingRepresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderGrowingRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
