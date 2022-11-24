import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() label: string;
  @Input() id: string;
  @Input() filterDropdown: string[];

  constructor() { }

  ngOnInit(): void {
  }
  
}
