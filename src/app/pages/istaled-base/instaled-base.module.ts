import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstaledBaseRoutingModule } from './instaled-base-routing.module';
import { AdvertingModule } from 'src/app/blocks/adverting/adverting.module';
import { IstaledBaseComponent } from './istaled-base.component';
import { TableBlockModule } from './table-block/table-block.module';
import { LastViewedBlockModule } from 'src/app/blocks/last-viewed-block/last-viewed-block.module';

@NgModule({
  declarations: [IstaledBaseComponent],
  imports: [
    CommonModule,
    InstaledBaseRoutingModule,
    AdvertingModule,
    TableBlockModule,
    LastViewedBlockModule
  ],
  exports: [IstaledBaseComponent]
})
export class InstaledBaseModule { }
