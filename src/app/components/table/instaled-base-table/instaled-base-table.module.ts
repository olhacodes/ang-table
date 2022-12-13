import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaledBaseTableComponent } from './instaled-base-table.component';
import { RadioButtonModule } from '../../icons/radio-button/radio-button.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InstaledBaseTableComponent],
  imports: [
    CommonModule,
    RadioButtonModule,
    FormsModule,
    RouterModule
  ],
  exports: [InstaledBaseTableComponent]
})
export class InstaledBaseTableModule { }
