import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenusPage } from './venus.page';

const routes: Routes = [
  {
    path: '',
    component: VenusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenusPageRoutingModule {}
