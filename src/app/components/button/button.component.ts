import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() value: string; 
  @Input() click: any;
  @Input() btnClass: 'primarily' | 'secondary';
  
  constructor() { }

  ngOnInit(): void {
  }

}
