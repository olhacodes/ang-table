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

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
    this.DataService.loadData()
    this.errorSub = this.DataService.error.subscribe( err => {
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