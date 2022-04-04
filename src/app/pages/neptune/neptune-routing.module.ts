import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeptunePage } from './neptune.page';

const routes: Routes = [
  {
    path: '',
    component: NeptunePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeptunePageRoutingModule {}
