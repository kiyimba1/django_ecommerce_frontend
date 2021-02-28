import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { NavComponent } from './nav/nav.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { UnitListComponent } from './unit-list/unit-list.component';


@NgModule({
  declarations: [NavComponent, ProductListComponent, UnitListComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule
  ],
  exports: [
    NavComponent,
    ProductListComponent
  ]
})
export class ClientModule { }
