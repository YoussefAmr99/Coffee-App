import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryPageComponent } from './deliveryPage/deliveryPage.component';

const routes: Routes = [{ path: '', component: DeliveryPageComponent }];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryRoutingModule {}
