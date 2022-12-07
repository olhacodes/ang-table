import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import {URLS} from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public instaledBaseDataSource: BehaviorSubject<ITable[]> = new BehaviorSubject([]);
  public instaledBaseData: Observable<ITable[]> = this.instaledBaseDataSource.asObservable();

  public notificationsDataSource: BehaviorSubject<INotifications[]> = new BehaviorSubject([]);
  public notificationsData: Observable<INotifications[]> = this.notificationsDataSource.asObservable();

  constructor(private http: HttpClient) { }

  onLoadData(url: string, data: BehaviorSubject<any> = new BehaviorSubject([])) {
    this.http.get<[]>(url).subscribe(res => {
      data.next(res)
    })
  }

  loadInstaledBaseData() {
    this.onLoadData(URLS.instaledBase, this.instaledBaseDataSource)
  }

  loadNotificationData() {
    this.onLoadData(URLS.notifications, this.notificationsDataSource)
  }
}