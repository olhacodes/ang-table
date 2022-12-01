import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DropdownComponent],
})
export class DropdownModule { }
