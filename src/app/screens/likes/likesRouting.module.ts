import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesPageComponent } from './likesPage/likesPage.component';

const routes: Routes = [{ path: '', component: LikesPageComponent }];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikesRoutingModule {}
