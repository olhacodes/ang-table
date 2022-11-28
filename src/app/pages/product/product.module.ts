import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule   
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
