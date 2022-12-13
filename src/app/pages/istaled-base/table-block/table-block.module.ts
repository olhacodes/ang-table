import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBlockComponent } from './table-block.component';
import { InstaledBaseTableModule } from 'src/app/components/table/instaled-base-table/instaled-base-table.module';
import { SideNavigationModule } from 'src/app/microservices/side-navigation/side-navigation.module';

@NgModule({
  declarations: [TableBlockComponent],
  imports: [
    CommonModule,
    InstaledBaseTableModule,
    SideNavigationModule
  ],
  exports: [TableBlockComponent]
})
export class TableBlockModule { }
