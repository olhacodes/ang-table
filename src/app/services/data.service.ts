import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import {URLS} from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public instaledBaseDataSource: BehaviorSubject<ITable[]> = new BehaviorSubject([]);
  public instaledBaseData: Observable<ITable[]> = this.instaledBaseDataSource.asObservable();

  public notificationsDataSource: BehaviorSubject<INotifications[]> = new BehaviorSubject([]);
  public notificationsData: Observable<INotifications[]> = this.notificationsDataSource.asObservable();
  
  public error = new Subject<string>();

  constructor(private http: HttpClient) { }

  loadInstaledBaseData() {
    this.http.get<[]>(URLS.instaledBase).subscribe(res => {
      this.instaledBaseDataSource.next(res);
    },
    err => {
      this.error.next(err.message);
    });
  }

  loadNotificationData() {
    this.http.get<[]>(URLS.notifications).subscribe(res => {
      this.notificationsDataSource.next(res);
    },
    err => {
      this.error.next(err.message);
    });
  }
}