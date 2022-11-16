import { Component, OnInit, Input } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { Subscription } from 'rxjs';

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
  
  ngOnInit() {
    this.tableSubscription = this.tableService.getTableData().subscribe(data => {
      this.tableData = data;
    })
  }

  ngOnDestroy() {
    this.tableSubscription.unsubscribe();
  }

}
