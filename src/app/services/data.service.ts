import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string = 'http://localhost:3000/table';
  public data: Observable<ITable[]>;
  
  constructor(private http: HttpClient) { }

  getDataFromAPI() {
    this.data = this.http.get<ITable[]>(this.URL)
    return this.data
  }
}
