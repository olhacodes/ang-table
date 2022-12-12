import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public instaledBaseDataSource: BehaviorSubject<ITable[]> = new BehaviorSubject([]);
  public instaledBaseData: Observable<ITable[]> = this.instaledBaseDataSource.asObservable();

  public notificationsDataSource: BehaviorSubject<INotifications[]> = new BehaviorSubject([]);
  public notificationsData: Observable<INotifications[]> = this.notificationsDataSource.asObservable();

  public ordersDataSource: BehaviorSubject<IOrders[]> = new BehaviorSubject([]);
  public ordersData: Observable<IOrders[]> = this.ordersDataSource.asObservable();

  public serviceTiketsDataSource: BehaviorSubject<IServiceTikets[]> = new BehaviorSubject([]);
  public serviceTiketsData: Observable<IServiceTikets[]> = this.serviceTiketsDataSource.asObservable();

  constructor(private http: HttpClient) { }

  onLoadData(url: string, data: BehaviorSubject<any> = new BehaviorSubject([])) {
    this.http.get<[]>(url).subscribe(res => {
      data.next(res)
    })
  }

  loadInstaledBaseData() {
    this.onLoadData(`${environment.baseUrl}/instaledBase`, this.instaledBaseDataSource)
  }

  loadNotificationData() {
    this.onLoadData(`${environment.baseUrl}/notifications`, this.notificationsDataSource)
  }

  loadOrdersData() {
    this.onLoadData(`${environment.baseUrl}/orders`, this.ordersDataSource)
  }

  loadserviceTiketsData() {
    this.onLoadData(`${environment.baseUrl}/serviceTikets`, this.serviceTiketsDataSource)
  }
}