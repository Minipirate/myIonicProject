import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesPhotosPage } from './slides-photos.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesPhotosPageRoutingModule {}
