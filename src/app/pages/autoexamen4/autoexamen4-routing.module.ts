import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Autoexamen4Page } from './autoexamen4.page';

const routes: Routes = [
  {
    path: '',
    component: Autoexamen4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Autoexamen4PageRoutingModule {}
