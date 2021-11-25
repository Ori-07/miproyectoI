import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Autoexamen1Page } from './autoexamen1.page';

const routes: Routes = [
  {
    path: '',
    component: Autoexamen1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Autoexamen1PageRoutingModule {}
