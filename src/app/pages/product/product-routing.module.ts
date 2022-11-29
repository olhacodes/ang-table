import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductWidgetComponent } from 'src/app/components/product-widget/product-widget.component';
import { ProductComponent } from './product.component';

const routes: Routes = [{ path: '', component: ProductComponent, 
children: [
  {path: 'widget', component: ProductWidgetComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
