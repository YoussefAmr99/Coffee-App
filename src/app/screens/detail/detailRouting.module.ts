import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './detailPage/detailPage.component';

const routes: Routes = [{ path: '', component: DetailPageComponent }];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
