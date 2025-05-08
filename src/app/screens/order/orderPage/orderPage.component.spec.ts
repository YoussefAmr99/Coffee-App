import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageComponent } from './orderPage.component';
import { OrderModule } from '../order.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderPageComponent', () => {
  let component: OrderPageComponent;
  let fixture: ComponentFixture<OrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
