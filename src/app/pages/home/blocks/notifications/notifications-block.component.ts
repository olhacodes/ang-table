import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-notifications-block',
  templateUrl: './notifications-block.component.html',
  styleUrls: []
})
export class NotificationsBlockComponent implements OnInit {
  tableData: Observable<INotifications[]> = this.dataService.notificationsData;
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   
  }

}
