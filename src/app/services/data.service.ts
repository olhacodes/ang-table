import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string = 'http://localhost:3000/table';
  public dataSource: BehaviorSubject<ITable[]> = new BehaviorSubject([]);
  public data: Observable<ITable[]> = this.dataSource.asObservable();
  public error = new Subject<string>();

  constructor(private http: HttpClient) { }

  loadData() {
    this.http.get<[]>(this.URL).subscribe(res => {
      this.dataSource.next(res);
    },
    err => {
      this.error.next(err.message);
    });
  }
}