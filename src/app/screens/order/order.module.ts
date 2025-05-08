import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './orderPage/orderPage.component';
import { SharedModule } from '../../shared/shared.module';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { OrderItemComponent } from './components/orderItem/orderItem.component';
import { PaymentComponent } from './components/payment/payment.component';
import { MethodComponent } from './components/method/method.component';
import { FormsModule } from '@angular/forms';
import { OrderRoutingModule } from './orderRouting.module';

@NgModule({
  declarations: [
    OrderPageComponent,
    PaymentComponent,
    DeliveryComponent,
    OrderItemComponent,
    MethodComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, OrderRoutingModule],
  exports: [OrderItemComponent],
})
export class OrderModule {}
