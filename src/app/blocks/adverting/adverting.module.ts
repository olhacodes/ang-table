import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertingComponent } from './adverting.component';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [AdvertingComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [AdvertingComponent]
})
export class AdvertingModule { }
