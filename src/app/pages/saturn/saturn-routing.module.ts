import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaturnPage } from './saturn.page';

const routes: Routes = [
  {
    path: '',
    component: SaturnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaturnPageRoutingModule {}
