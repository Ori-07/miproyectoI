import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Autoexamen2Page } from './autoexamen2.page';

const routes: Routes = [
  {
    path: '',
    component: Autoexamen2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Autoexamen2PageRoutingModule {}
