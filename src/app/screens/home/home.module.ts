import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './homePage/homePage.component';
import { PromoComponent } from './components/promo/promo.component';
import { LocationComponent } from './components/location/location.component';
import { CategoryBarComponent } from './components/categoryBar/categoryBar.component';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    FooterComponent,
    PromoComponent,
    LocationComponent,
    CategoryBarComponent,
    SearchComponent,
    ProductComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class HomeModule {}
