import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { ProductoTableComponent } from './components/producto-table/producto-table.component';
import { PageListAdminComponent } from './components/page-list-admin/page-list-admin.component';

@NgModule({
  declarations: [PageListComponent, FormComponent, ProductoTableComponent, PageListAdminComponent],
  imports: [CommonModule, ProductosRoutingModule, SharedModule],
  exports: [
    ProductoTableComponent,
    PageListAdminComponent
  ],
})
export class ProductosModule {}
