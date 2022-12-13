import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation.component';

@NgModule({
  declarations: [SideNavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [SideNavigationComponent]
})
export class SideNavigationModule { }
