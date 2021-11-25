import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Autoexamen1PageRoutingModule } from './autoexamen1-routing.module';

import { Autoexamen1Page } from './autoexamen1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Autoexamen1PageRoutingModule
  ],
  declarations: [Autoexamen1Page]
})
export class Autoexamen1PageModule {}
