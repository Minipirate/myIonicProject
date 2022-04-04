import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisiecoursPage } from './saisiecours.page';

const routes: Routes = [
  {
    path: '',
    component: SaisiecoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisiecoursPageRoutingModule {}
