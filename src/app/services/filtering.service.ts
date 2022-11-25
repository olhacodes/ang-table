import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilteringDataService {
  isSorted: boolean = false;
  direction: string = 'desc';

  onFilterTable(field: string, tableData) {
    const filtereValue = (document.getElementById(field) as HTMLInputElement).value;
    
    return filtereValue !== 'Show All' ? tableData.filter(item =>  {
      return item[field] === filtereValue;
    }) : tableData
  }

  onSort() {
    this.isSorted =!this.isSorted;
  }

  compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

  onSortTable(field: string, tableData) {
    this.onSort()
    
    tableData = tableData.sort((a: string | number ,b: string | number) => {
      let res = this.compare(a[field], b[field]);
      tableData = this.isSorted  ? res : -res
    
      return tableData;
    })
    return tableData;
  }
}
