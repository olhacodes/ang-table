import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orders-block',
  templateUrl: './orders-block.component.html',
  styleUrls: []
})
export class OrdersBlockComponent implements OnInit {
  tableData: Observable<IOrders[]> = this.dataService.ordersData;
 
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
