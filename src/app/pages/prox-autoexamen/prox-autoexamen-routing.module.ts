import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProxAutoexamenPage } from './prox-autoexamen.page';

const routes: Routes = [
  {
    path: '',
    component: ProxAutoexamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProxAutoexamenPageRoutingModule {}
