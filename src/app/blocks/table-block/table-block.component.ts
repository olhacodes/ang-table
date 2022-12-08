import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table-block',
  templateUrl: './table-block.component.html',
  styleUrls: []
})
export class TableBlockComponent implements OnInit {
  tableData: Observable<ITable[]> = this.dataService.instaledBaseData;
  
  constructor(private dataService: DataService,) { }

  ngOnInit(): void {
  }
}
