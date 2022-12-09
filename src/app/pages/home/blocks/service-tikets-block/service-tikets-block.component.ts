import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-service-tikets-block',
  templateUrl: './service-tikets-block.component.html',
  styleUrls: []
})
export class ServiceTiketsBlockComponent implements OnInit {
  tableData: Observable<IServiceTikets[]> = this.dataService.serviceTiketsData;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
