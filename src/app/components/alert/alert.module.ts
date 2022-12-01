import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert.component';
import { DropdownModule } from '../dropdown/dropdown.module';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    NgbAlertModule,
    DropdownModule,
  ]
})
export class AlertModule { }
