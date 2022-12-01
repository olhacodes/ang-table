import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service'

@Component({
  selector: 'app-istaled-base',
  templateUrl: './istaled-base.component.html',
  styleUrls: []
})
export class IstaledBaseComponent implements OnInit {

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
    this.DataService.loadData()
  }

}