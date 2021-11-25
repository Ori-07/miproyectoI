import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Autoexamen5PageRoutingModule } from './autoexamen5-routing.module';

import { Autoexamen5Page } from './autoexamen5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Autoexamen5PageRoutingModule
  ],
  declarations: [Autoexamen5Page]
})
export class Autoexamen5PageModule {}
