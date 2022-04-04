import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JupiterPageRoutingModule } from './jupiter-routing.module';

import { JupiterPage } from './jupiter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JupiterPageRoutingModule
  ],
  declarations: [JupiterPage]
})
export class JupiterPageModule {}
