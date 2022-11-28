import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from 'src/app/pages/product/product-routing.module';
import { ProductWidgetComponent } from './product-widget.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  declarations: [ProductWidgetComponent]
})
export class ProductWidgetModule { }
