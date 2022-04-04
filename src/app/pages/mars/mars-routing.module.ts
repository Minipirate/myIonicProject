import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarsPage } from './mars.page';

const routes: Routes = [
  {
    path: '',
    component: MarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarsPageRoutingModule {}
