import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HitosRoutingModule } from './hitos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    HitosRoutingModule
  ]
})
export class HitosModule { }
