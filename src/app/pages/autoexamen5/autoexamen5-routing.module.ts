import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Autoexamen5Page } from './autoexamen5.page';

const routes: Routes = [
  {
    path: '',
    component: Autoexamen5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Autoexamen5PageRoutingModule {}
