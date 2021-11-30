import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProxAutoexamenPageRoutingModule } from './prox-autoexamen-routing.module';

import { ProxAutoexamenPage } from './prox-autoexamen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProxAutoexamenPageRoutingModule
  ],
  declarations: [ProxAutoexamenPage]
})
export class ProxAutoexamenPageModule {}
