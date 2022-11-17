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

  statuses: string[];
  descriptions: string[];
  
  ngOnInit() {
    this.tableSubscription = this.tableService.getTableData()
    .subscribe((data) => (this.tableData = data));

    this.tableService.getTableData().subscribe(data => {
      this.statuses = [...new Set(data.map(item => item.status))]
      this.descriptions = [...new Set(data.map(item => item.description))]
    })
  }

  ngOnDestroy() {
    this.tableSubscription.unsubscribe();
  }

}
