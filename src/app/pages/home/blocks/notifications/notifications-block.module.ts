import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsBlockComponent } from './notifications-block.component';
import { SideNavigationModule } from 'src/app/microservices/side-navigation/side-navigation.module';

@NgModule({
  declarations: [NotificationsBlockComponent],
  imports: [
    CommonModule,
    SideNavigationModule
  ],
  exports: [NotificationsBlockComponent]
})
export class NotificationsBlockModule { }
