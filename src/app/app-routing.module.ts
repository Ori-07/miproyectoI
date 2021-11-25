import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'autoexamen',
    loadChildren: () => import('./pages/autoexamen/autoexamen.module').then( m => m.AutoexamenPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./pages/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'testimonio',
    loadChildren: () => import('./pages/testimonio/testimonio.module').then( m => m.TestimonioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tratamiento',
    loadChildren: () => import('./pages/tratamiento/tratamiento.module').then( m => m.TratamientoPageModule)
  },
  {
    path: 'recordatorio',
    loadChildren: () => import('./pages/recordatorio/recordatorio.module').then( m => m.RecordatorioPageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./pages/privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'autoexamen1',
    loadChildren: () => import('./pages/autoexamen1/autoexamen1.module').then( m => m.Autoexamen1PageModule)
  },
  {
    path: 'autoexamen2',
    loadChildren: () => import('./pages/autoexamen2/autoexamen2.module').then( m => m.Autoexamen2PageModule)
  },
  {
    path: 'autoexamen3',
    loadChildren: () => import('./pages/autoexamen3/autoexamen3.module').then( m => m.Autoexamen3PageModule)
  },
  {
    path: 'autoexamen4',
    loadChildren: () => import('./pages/autoexamen4/autoexamen4.module').then( m => m.Autoexamen4PageModule)
  },
  {
    path: 'autoexamen5',
    loadChildren: () => import('./pages/autoexamen5/autoexamen5.module').then( m => m.Autoexamen5PageModule)
  },
  
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)
  },
  {
    path: 'respira',
    loadChildren: () => import('./pages/respira/respira.module').then( m => m.RespiraPageModule)
  },
  {
    path: 'cuestionario-e',
    loadChildren: () => import('./pages/cuestionario-e/cuestionario-e.module').then( m => m.CuestionarioEPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
