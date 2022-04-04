import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MercuryPageRoutingModule } from './mercury-routing.module';

import { MercuryPage } from './mercury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MercuryPageRoutingModule
  ],
  declarations: [MercuryPage]
})
export class MercuryPageModule {}
