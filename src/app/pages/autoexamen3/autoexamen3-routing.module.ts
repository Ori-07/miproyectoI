import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Autoexamen3Page } from './autoexamen3.page';

const routes: Routes = [
  {
    path: '',
    component: Autoexamen3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Autoexamen3PageRoutingModule {}
