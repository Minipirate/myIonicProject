import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UranusPageRoutingModule } from './uranus-routing.module';

import { UranusPage } from './uranus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UranusPageRoutingModule
  ],
  declarations: [UranusPage]
})
export class UranusPageModule {}
