import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MercuryPage } from './mercury.page';

const routes: Routes = [
  {
    path: '',
    component: MercuryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MercuryPageRoutingModule {}
