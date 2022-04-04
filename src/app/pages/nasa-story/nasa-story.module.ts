import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NasaStoryPageRoutingModule } from './nasa-story-routing.module';

import { NasaStoryPage } from './nasa-story.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NasaStoryPageRoutingModule
  ],
  declarations: [NasaStoryPage]
})
export class NasaStoryPageModule {}
