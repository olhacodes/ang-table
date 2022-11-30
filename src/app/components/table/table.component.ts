import { Component, Input, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { FilteringDataService } from 'src/app/services/filtering.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private DataService: DataService, private filteringService: FilteringDataService) { }

  tableLabels = ['Status', '', "Number", 'Description', 'Instal. Date', 'Last service', 'Nb. Components']
  tableData: ITable[];
  filteredTable: ITable[];

  statuses: any[];
  descriptions: any[];
  viewedProducts: ITable[] = [];

  @Input() rotateSortIcon: boolean = false; 
  @Input() error: boolean = false;
  @Input() errorMessage = 'Loading...';
  
  ngOnInit() {
    this.DataService.getDataFromAPI()
    .subscribe(
      (data) => {
      this.tableData = data;
      this.filteredTable = this.tableData
  
      this.statuses = [...new Set(data.map(item => item.status))]
      this.statuses.push('Show All')
      this.statuses.reverse()
  
      this.descriptions = [...new Set(data.map(item => item.description))]
      this.descriptions.push('Show All')
      this.descriptions.reverse().sort((a, b) => a.localeCompare(b))
    },
    (error) => {
      this.error = true;
      this.errorMessage = error.message;
    }
    )
  }
  
  onFilterTable(field: string) {
    this.filteredTable = this.filteringService.onFilterTable(field, this.tableData)
  }

  onSort(field: string) {
    this.filteredTable = this.filteringService.onSortTable(field, this.tableData)
    this.rotateSortIcon = this.filteringService.isSorted
  }
}