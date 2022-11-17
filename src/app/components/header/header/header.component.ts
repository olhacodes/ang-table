import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() label: string;
  @Input() filterDropdown: string[];
  @Input() click: any;

  constructor() { }

  ngOnInit(): void {
  }

}
