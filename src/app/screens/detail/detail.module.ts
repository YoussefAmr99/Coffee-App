import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detailPage/detailPage.component';
import { SharedModule } from '../../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { DetailsRoutingModule } from './detailRouting.module';

@NgModule({
  declarations: [DetailPageComponent, ItemComponent, PurchaseComponent],
  imports: [CommonModule, SharedModule, DetailsRoutingModule],
})
export class DetailModule {}
