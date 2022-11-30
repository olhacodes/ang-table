import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { FilteringDataService } from 'src/app/services/filtering.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  constructor(private DataService: DataService, private filteringService: FilteringDataService) { }

  tableLabels = ['Status', '', "Number", 'Description', 'Instal. Date', 'Last service', 'Nb. Components']
  tableData: ITable[];
  tableSubscription: Subscription;
  filteredTable: any[];
  statuses: string[];
  descriptions: string[];
  selectedDesk;
  selectedStatus;

  @Input() rotateSortIcon: boolean = false; 
  @Input() error: boolean = false;
  @Input() errorMessage = 'Loading...';
  
  ngOnInit() {
    this.tableSubscription = this.DataService.data
    .subscribe({
      next: (data) => {
      this.tableData = data;
      this.filteredTable = this.tableData

      this.statuses = [...new Set(data.map(item => item.status))]
      this.statuses.push('Show All')
      this.statuses.reverse()

      this.descriptions = [...new Set(data.map(item => item.description))]
      this.descriptions.push('Show All')
      this.descriptions.reverse().sort((a, b) => a.localeCompare(b))
    },
      error: (error) => {
        this.error = true;
        this.errorMessage = error.message;
      }
    });
  }

  onSelect(filteredValue, field){
    if(filteredValue !== 'Show All') {
     return this.filteredTable = this.tableData.filter(item => item[field] == filteredValue)
    } else {
      return this.filteredTable = this.tableData
    }
  }

  onSort(field: string) {
    this.filteredTable = this.filteringService.onSortTable(field, this.tableData)
    this.rotateSortIcon = this.filteringService.isSorted
  }

  ngOnDestroy() {
    this.tableSubscription.unsubscribe();
  }

}