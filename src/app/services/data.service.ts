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
  
  public errorInstaledBase = new Subject<string>();
  public errorNotifications = new Subject<string>();

  constructor(private http: HttpClient) { }

  onLoadData(url: string, data: BehaviorSubject<any> = new BehaviorSubject([]), error = new Subject<string>()) {
    this.http.get<[]>(url).subscribe(res => {
      data.next(res)
    }, 
    err => {
      error.next(err.message)
    })
  }

  onError(error:boolean, errorSubscriotion:string, errorMessage: string[] = []) {
    if(errorMessage != null) {
      error = true;
    }
    errorMessage.push(errorSubscriotion)
  }

  loadInstaledBaseData() {
    this.onLoadData(URLS.instaledBase, this.instaledBaseDataSource, this.errorInstaledBase)
  }

  loadNotificationData() {
    this.onLoadData(URLS.notifications, this.notificationsDataSource, this.errorNotifications)
  }
}