import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Autoexamen3PageRoutingModule } from './autoexamen3-routing.module';

import { Autoexamen3Page } from './autoexamen3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Autoexamen3PageRoutingModule
  ],
  declarations: [Autoexamen3Page]
})
export class Autoexamen3PageModule {}
