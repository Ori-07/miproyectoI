import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiraPage } from './respira.page';

const routes: Routes = [
  {
    path: '',
    component: RespiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiraPageRoutingModule {}
