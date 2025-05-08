import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryPageComponent } from './deliveryPage/deliveryPage.component';
import { DriverComponent } from './components/driver/driver.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TimerComponent } from './components/timer/timer.component';
import { DeliveryRoutingModule } from './deliveryRouting.module';

@NgModule({
  declarations: [
    DeliveryPageComponent,
    DriverComponent,
    NotificationComponent,
    TimerComponent,
  ],
  imports: [CommonModule, DeliveryRoutingModule],
})
export class DeliveryModule {}
