import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingPageComponent } from '../screens/onboarding/onboardingPage/onboardingPage.component';
import { HomePageComponent } from '../screens/home/homePage/homePage.component';
import { OrderPageComponent } from '../screens/order/orderPage/orderPage.component';
import { DetailPageComponent } from '../screens/detail/detailPage/detailPage.component';
import { DeliveryPageComponent } from '../screens/delivery/deliveryPage/deliveryPage.component';
import { LikesPageComponent } from '../screens/likes/likesPage/likesPage.component';
import { existGuard } from '../screens/detail/guard/exist.guard';

const routes: Routes = [
  { path: '', component: OnboardingPageComponent },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'likes',
    loadChildren: () =>
      import('../screens/likes/likes.module').then((m) => m.LikesModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('../screens/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('../screens/detail/detail.module').then((m) => m.DetailModule),
    canActivate: [existGuard],
  },
  {
    path: 'delivery',
    loadChildren: () =>
      import('../screens/delivery/delivery.module').then(
        (m) => m.DeliveryModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
