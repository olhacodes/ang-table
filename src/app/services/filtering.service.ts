import { Injectable } from '@angular/core';
import { Subscription, take } from 'rxjs';

import {DataService} from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class FilteringDataService {
  constructor(private DataService: DataService) { 
    this.dataSubscription = this.DataService.getDataFromAPI().pipe(take(1)).subscribe(data => {
      this.tableData = data;
    })
  }

  tableData: ITable[];
  filteredTable: ITable[];
  dataSubscription: Subscription;

  onFilterTable(field: string) {
    const filtereValue = (document.getElementById(field) as HTMLInputElement).value;
    this.filteredTable =  filtereValue !== 'Show All' ? this.tableData.filter(item =>  field === 'status' ? (item.status ===  filtereValue) : (item.description === filtereValue)) : this.tableData
    return this.filteredTable
  }
}
