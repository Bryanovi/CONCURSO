import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { TareaTableComponent } from './components/tarea-table/tarea-table.component';
import { PageListAdminComponent } from './components/page-list-admin/page-list-admin.component';

@NgModule({
  declarations: [PageListComponent, FormComponent, TareaTableComponent, PageListAdminComponent],
  imports: [CommonModule, TareasRoutingModule, SharedModule],
  exports: [
    TareaTableComponent,
    PageListAdminComponent
  ],
})
export class TareasModule {}
