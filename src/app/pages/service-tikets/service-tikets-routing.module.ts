import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceTiketsComponent } from './service-tikets.component';

const routes: Routes = [
  {path: '', component: ServiceTiketsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceTiketsRoutingModule { }
