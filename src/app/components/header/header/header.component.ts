import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() label: string;
  @Input() id: string;
  @Input() filterDropdown: string[];
  @Input() filter: string[];
  @Input() change: any;

  constructor() { }

  ngOnInit(): void {
  }
  
}
