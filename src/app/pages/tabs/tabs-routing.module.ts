import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: './inicio/inicio.Module#InicioPageModule'

      },
      {
        path: 'autoexamen',
        loadChildren: './autoexamen/autoexamen.Module#AutoexamenPageModule'

      }


    ]
  }

   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
