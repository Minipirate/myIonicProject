import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarsPageRoutingModule } from './mars-routing.module';

import { MarsPage } from './mars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarsPageRoutingModule
  ],
  declarations: [MarsPage]
})
export class MarsPageModule {}
