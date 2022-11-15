import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  log(val) { console.log(val); }

  filters = {
    "productType":  ["Select All", "value 1", 'value 2'],
    "status": ["Select All", "value 1", 'value 2'],
    "category": ["Select All", "value 1", 'value 2'],
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
