import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {DataService} from 'src/app/services/data.service'

@Component({
  selector: 'app-istaled-base',
  templateUrl: './istaled-base.component.html',
  styleUrls: []
})
export class IstaledBaseComponent implements OnInit, OnDestroy {
  error: boolean;
  @Input() errorMessage: string = "Loading...";
  errorSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.loadInstaledBaseData()
    this.dataService.loadNotificationData()
    
    this.errorSub = this.dataService.error.subscribe( err => {
      if(this.errorMessage != null) {
        this.error = true;
      }
      this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}