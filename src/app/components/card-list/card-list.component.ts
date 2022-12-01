import { ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CardListComponent implements OnInit, OnDestroy {

  constructor(private DataService: DataService, config: NgbCarouselConfig) { 
    config.interval = 10000;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
  
  cardData: any[] = [];
  cardSubscription: Subscription;
  sliceArrayIntoGroups: any
  size: number = 3;
  i: number = 0;

  ngOnInit() {
    this.cardSubscription = this.DataService.data.subscribe(
      (data) => {
        this.cardData = data;
         let cardList = []
   
         while(this.i < this.cardData.length) {
           cardList.push(this.cardData.slice(this.i, this.i +=this.size))
         }
         this.cardData = cardList;
      }
    )
  }

  ngOnDestroy() {
    this.cardSubscription.unsubscribe();
  }
}
