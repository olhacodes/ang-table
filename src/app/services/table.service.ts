import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  URL: string = 'http://localhost:3000/table';
  public rowData: Observable<ITable[]>;
  
  constructor(private http: HttpClient) { }

  getTableData() {
    this.rowData = this.http.get<ITable[]>(this.URL)
    return this.rowData
  }
}
