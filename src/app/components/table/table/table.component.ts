import { Component, OnInit, Input } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private tableService: TableService) { }

  tableLabels = ['Status', '', "Number", 'Description', 'Instal. Date', 'Last service', 'Nb. Components']
  tableData: ITable[];
  tableSubscription: Subscription;
  filteredTable: ITable[];

  statuses: string[];
  descriptions: string[];
  
  ngOnInit() {
    this.tableSubscription = this.tableService.getTableData()
    .subscribe((data) => {
      this.tableData = data
      this.filteredTable = this.tableData

      this.statuses = [...new Set(data.map(item => item.status))]
      this.statuses.push('Show All')

      this.descriptions = [...new Set(data.map(item => item.description))]
      this.descriptions.push('Show All')
    });
  }

  onFilterStatus(field: string) {
    const filtereValue = (document.getElementById(field) as HTMLInputElement).value;

    this.filteredTable =  filtereValue !== 'Show All' ? this.tableData.filter(item =>  field === 'status' ? (item.status ===  filtereValue) : (item.description === filtereValue)) : this.tableData
    
    return this.filteredTable
  }

  ngOnDestroy() {
    this.tableSubscription.unsubscribe();
  }

}
