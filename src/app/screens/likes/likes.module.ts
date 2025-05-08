import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesPageComponent } from './likesPage/likesPage.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderModule } from '../order/order.module';
import { LikesRoutingModule } from './likesRouting.module';

@NgModule({
  declarations: [LikesPageComponent],
  imports: [CommonModule, SharedModule, LikesRoutingModule, OrderModule],
})
export class LikesModule {}
