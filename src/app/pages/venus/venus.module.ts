import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenusPageRoutingModule } from './venus-routing.module';

import { VenusPage } from './venus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenusPageRoutingModule
  ],
  declarations: [VenusPage]
})
export class VenusPageModule {}
