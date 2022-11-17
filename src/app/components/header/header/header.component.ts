import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  statuses: string[];
  descriptions: string[];

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getTableData().subscribe(data => {
    this.statuses = [...new Set(data.map(item => item.status))]
    this.descriptions = [...new Set(data.map(item => item.description))]
    })
  }
}
