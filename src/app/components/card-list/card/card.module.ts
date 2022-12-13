import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlagIconModule } from '../../icons/flag-icon/flag-icon.module';
import { IconStarModule } from '../../icons/icon-star/icon-star.module';
import { ButtonModule } from '../../button/button.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    NgbModule,
    FlagIconModule,
    IconStarModule,
    ButtonModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
