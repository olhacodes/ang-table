import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string = 'http://localhost:3000/table';
  public data = {}
  
  constructor(private http: HttpClient) { }

  getDataFromAPI() {
     if(!this.data[this.URL]) {
      this.data[this.URL] = new AsyncSubject();
      this.http.get(this.URL).subscribe(data => {
        this.data[this.URL].next(data);
        this.data[this.URL].complete();
      })
    }
    return this.data[this.URL].asObservable();
  }
}
