import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {DataService} from 'src/app/services/data.service'
import { ErrorMessageService } from 'src/app/services/error-message.service';

@Component({
  selector: 'app-istaled-base',
  templateUrl: './istaled-base.component.html',
  styleUrls: []
})
export class IstaledBaseComponent implements OnInit {
  @Input() errorMessage: Observable<string>;
  @Input() error:  Observable<boolean>;;

  constructor(private dataService: DataService, private errorMessageService: ErrorMessageService) { }

  ngOnInit(): void {
    this.dataService.loadInstaledBaseData()
    this.dataService.loadNotificationData()

    this.errorMessage = this.errorMessageService.message.asObservable()
    this.error = this.errorMessageService.error.asObservable()
  }
}