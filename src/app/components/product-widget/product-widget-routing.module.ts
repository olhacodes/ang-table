import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductWidgetComponent } from './product-widget.component';

const routes: Routes = [{path: 'product/:id', component: ProductWidgetComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductWidgetRoutingModule { }
