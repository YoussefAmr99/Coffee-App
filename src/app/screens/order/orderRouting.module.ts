import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './orderPage/orderPage.component';

const routes: Routes = [{ path: '', component: OrderPageComponent }];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
