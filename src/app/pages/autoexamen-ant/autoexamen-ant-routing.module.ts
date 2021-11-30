import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoexamenAntPage } from './autoexamen-ant.page';

const routes: Routes = [
  {
    path: '',
    component: AutoexamenAntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoexamenAntPageRoutingModule {}
