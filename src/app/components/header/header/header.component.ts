import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

filters = {
  "productType":  [
    {value: 'steak-0', viewValue: 'Steak 1'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ],
  "status": [
    {value: 'steak-0', viewValue: 'Steak 2'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ],
  "category": [
    {value: 'steak-0', viewValue: 'Steak 3'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ],
}
  constructor() { }

  ngOnInit(): void {
  }

}
