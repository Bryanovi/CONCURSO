import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { ProyectoTableComponent } from './components/proyecto-table/proyecto-table.component';
import { PageListAdminComponent } from './components/page-list-admin/page-list-admin.component';

@NgModule({
  declarations: [PageListComponent, FormComponent, ProyectoTableComponent, PageListAdminComponent],
  imports: [CommonModule, ProyectosRoutingModule, SharedModule],
  exports: [
    ProyectoTableComponent,
    PageListAdminComponent
  ],
})
export class ProductosModule {}
