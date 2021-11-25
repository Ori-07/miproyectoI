import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Autoexamen4PageRoutingModule } from './autoexamen4-routing.module';

import { Autoexamen4Page } from './autoexamen4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Autoexamen4PageRoutingModule
  ],
  declarations: [Autoexamen4Page]
})
export class Autoexamen4PageModule {}
