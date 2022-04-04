import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JupiterPage } from './jupiter.page';

const routes: Routes = [
  {
    path: '',
    component: JupiterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JupiterPageRoutingModule {}
