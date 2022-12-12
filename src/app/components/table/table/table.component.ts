import { Component, Input, OnInit } from '@angular/core';
import { FilteringDataService } from 'src/app/services/filtering.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private filteringService: FilteringDataService) { }

  tableLabels = ['', 'Number', 'Creation Date', 'Title', 'Cust. Number', 'Status', 'Total'];
  tableData: any[];
  filteredTable: any[];
  rotateSortIcon: boolean = false;

  @Input() title: string;
  @Input() icon: string
  @Input() route: string;

  ngOnInit(): void {
  }

  @Input() set setTableData(data: any[]) {
    this.tableData = data;
  }

  onSort(field: string) {
    this.filteredTable = this.filteringService.onSortTable(field, this.tableData)
    this.rotateSortIcon = this.filteringService.isSorted
  }
}
