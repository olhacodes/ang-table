import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastViewedBlockComponent } from './last-viewed-block.component';
import { CardListModule } from 'src/app/components/card-list/card-list.module';

@NgModule({
  declarations: [LastViewedBlockComponent],
  imports: [
    CommonModule,
    CardListModule
  ],
  exports: [LastViewedBlockComponent]
})
export class LastViewedBlockModule { }
