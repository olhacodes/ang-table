import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  URL: string = 'http://localhost:3000/table'
  
  constructor(private http: HttpClient) { }

  getTableData() {
    return this.http.get<ITable[]>(this.URL)
  }
}
