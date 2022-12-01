import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilteringDataService {
  isSorted: boolean = false;
  direction: string = 'desc';

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
