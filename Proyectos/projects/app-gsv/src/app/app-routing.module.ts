import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'proyecto',
    loadChildren: () =>
      import('./proyectos/proyectos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'tarea',
    loadChildren: () =>
      import('./tareas/tareas.module').then((m) => m.TareasModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
