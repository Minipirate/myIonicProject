import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaturnPageRoutingModule } from './saturn-routing.module';

import { SaturnPage } from './saturn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaturnPageRoutingModule
  ],
  declarations: [SaturnPage]
})
export class SaturnPageModule {}
