import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor(private DataService: DataService) { }
  cardData: ITable[];
  cardSubscription: Subscription;

  ngOnInit() {
    this.cardSubscription = this.DataService.getDataFromAPI().subscribe(data => {
      this.cardData = data;
    })
  }
}
