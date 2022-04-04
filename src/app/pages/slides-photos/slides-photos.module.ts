import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesPhotosPageRoutingModule } from './slides-photos-routing.module';

import { SlidesPhotosPage } from './slides-photos.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesPhotosPageRoutingModule,
    SwiperModule
  ],
  declarations: [SlidesPhotosPage]
})
export class SlidesPhotosPageModule { }
