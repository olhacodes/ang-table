import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table.component';
import { TableTitleModule } from '../table-title/table-title.module';
import { RouterModule } from '@angular/router';
import { FlagIconModule } from '../../icons/flag-icon/flag-icon.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableTitleModule,
    RouterModule,
    FlagIconModule,
    NgbModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
