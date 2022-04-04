import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SaisieCoursPageRoutingModule } from './saisie-cours-routing.module';
import { SaisieCoursPage } from './saisie-cours.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SaisieCoursPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: SaisieCoursPage
      }
    ])
  ],
  declarations: [SaisieCoursPage]
})
export class SaisieCoursPageModule { }
