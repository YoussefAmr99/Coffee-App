import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './screens/home/home.module';
import { DetailModule } from './screens/detail/detail.module';
import { OrderModule } from './screens/order/order.module';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryModule } from './screens/delivery/delivery.module';
import { LikesModule } from './screens/likes/likes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HomeModule,
    DetailModule,
    OrderModule,
    DeliveryModule,
    LikesModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
