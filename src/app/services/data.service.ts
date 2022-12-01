import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string = 'http://localhost:3000/table';
  public dataSource: BehaviorSubject<ITable[]> = new BehaviorSubject([]);
  public data: Observable<ITable[]> = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  loadData() {
    this.http.get<[]>(this.URL).subscribe(res => {
      this.dataSource.next(res);
    })
  }
}