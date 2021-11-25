import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Autoexamen2PageRoutingModule } from './autoexamen2-routing.module';

import { Autoexamen2Page } from './autoexamen2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Autoexamen2PageRoutingModule
  ],
  declarations: [Autoexamen2Page]
})
export class Autoexamen2PageModule {}
