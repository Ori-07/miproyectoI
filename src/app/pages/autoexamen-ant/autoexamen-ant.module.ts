import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoexamenAntPageRoutingModule } from './autoexamen-ant-routing.module';

import { AutoexamenAntPage } from './autoexamen-ant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoexamenAntPageRoutingModule
  ],
  declarations: [AutoexamenAntPage]
})
export class AutoexamenAntPageModule {}
