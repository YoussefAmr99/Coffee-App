import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemComponent } from './orderItem.component';
import { OrderModule } from '../../order.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderItemComponent', () => {
  let component: OrderItemComponent;
  let fixture: ComponentFixture<OrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderItemComponent);
    component = fixture.componentInstance;
    component.product = {
      id: 1,
      name: 'coffee',
      description: 'a cup of hot coffee',
      state: 'Hot',
      rating: 4,
      ratingCount: 190,
      category: 'Espresso',
      price: 4,
      longDescription: 'a cup of hote coffee served with a small biscuit',
      imageUrl: 'images/coffeeOne.svg',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
