import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnDestroy {
  constructor(private DataService: DataService) { }
  @Input() cardData: ITable[];
  cardSubscription: Subscription;
  cardList: any[] = [];
  sliceArrayIntoGroups: any
  size: number = 3;
  i: number = 0;

  ngOnInit() {
    this.cardSubscription = this.DataService.getDataFromAPI().subscribe(data => {
      this.cardData = data;

      while(this.i < this.cardData.length) {
        this.cardList.push(this.cardData.slice(this.i, this.i +=this.size))
      }
      this.cardData = this.cardList
      
      console.log(this.cardData)
    })
  }

  
  ngOnDestroy() {
    this.cardSubscription.unsubscribe();
  }
}
