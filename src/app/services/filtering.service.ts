import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilteringDataService {

  onFilterTable(field: string, tableData) {
    const filtereValue = (document.getElementById(field) as HTMLInputElement).value;
    
    return filtereValue !== 'Show All' ? tableData.filter(item =>  {
      return item[field] === filtereValue;
    }) : tableData
  }
}
