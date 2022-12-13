import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTitleComponent } from './table-title.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableTitleComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TableTitleComponent]
})
export class TableTitleModule { }
