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
  @Input() errorMessage: string[] = [];
  errorSubInstaledBase: Subscription;
  errorSubNotifications: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.loadInstaledBaseData()
    this.dataService.loadNotificationData()

    this.errorSubInstaledBase = this.dataService.errorInstaledBase.subscribe( err => {
      this.dataService.onError(this.error, err, this.errorMessage)
    });

    this.errorSubNotifications = this.dataService.errorNotifications.subscribe( err => {
      this.dataService.onError(this.error, err, this.errorMessage)
    });
  }

  ngOnDestroy(): void {
    this.errorSubInstaledBase.unsubscribe();
    this.errorSubNotifications.unsubscribe();
  }
}