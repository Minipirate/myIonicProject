import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeptunePageRoutingModule } from './neptune-routing.module';

import { NeptunePage } from './neptune.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeptunePageRoutingModule
  ],
  declarations: [NeptunePage]
})
export class NeptunePageModule {}
