import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiraPageRoutingModule } from './respira-routing.module';

import { RespiraPage } from './respira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiraPageRoutingModule
  ],
  declarations: [RespiraPage]
})
export class RespiraPageModule {}
