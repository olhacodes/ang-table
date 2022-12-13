import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardListComponent } from './card-list.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    NgbModule,
    CardModule
  ],
  exports: [CardListComponent]
})
export class CardListModule { }
