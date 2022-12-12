import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceTiketsRoutingModule } from './service-tikets-routing.module';
import { ServiceTiketsComponent } from './service-tikets.component';


@NgModule({
  declarations: [ServiceTiketsComponent],
  imports: [
    CommonModule,
    ServiceTiketsRoutingModule
  ]
})
export class ServiceTiketsModule { }
