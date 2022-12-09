import { Component, Input, OnInit } from '@angular/core';
import { FilteringDataService } from 'src/app/services/filtering.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private filteringService: FilteringDataService) { }

  tableLabels = ['Status', '', "Number", 'Description', 'Instal. Date', 'Last service', 'Nb. Components']
  tableData: any[];
  filteredTable: any[];

  statuses: string[];
  descriptions: string[];
  selectedDesk: string;
  selectedStatus: string; 

  rotateSortIcon: boolean = false; 
  
  ngOnInit() {

  }
  
  @Input() set setTableData(data: any[]) {
    this.tableData = data;
    this.filteredTable = this.tableData
   
    this.statuses = [...new Set(this.filteredTable.map(item => item.status))];
    this.statuses.push('Show All');
    this.statuses.reverse()

    this.descriptions = [...new Set(this.filteredTable.map(item => item.description))]
    this.descriptions.push('Show All')
    this.descriptions.reverse().sort((a, b) => a.localeCompare(b))
  }

  onSelect(filteredValue, field){
    if(filteredValue !== this.selectedStatus) {
      this.selectedStatus = 'Show All'
    }
    if(filteredValue!== this.selectedDesk) {
      this.selectedDesk = 'Show All'
    }
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
}