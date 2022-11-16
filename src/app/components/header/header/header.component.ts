import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedValue: number;
 
  selectItems = [
      [
        {label: 'Product type'},
        { id: 1, name: 'Select All' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ],
    [
      {label: 'Status'},
      { id: 1, name: 'Select All 2' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ],
  [
    {label: 'Category'},
    { id: 1, name: 'Select All 3' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ],
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
