import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag-icon',
  templateUrl: './flag-icon.component.html',
  styleUrls: []
})
export class FlagIconComponent implements OnInit {
  @Input() status: string;

  constructor() { }

  ngOnInit() {
    switch (this.status) {
      case 'success': this.status = 'success'
      this.status = '#74BC26';
      break;
      case 'warning': this.status = 'warning';
      this.status ='#F5A623';
      break;
      case 'error': this.status = 'error';
      this.status ='#FF5555';
      break;
      default:  this.status = '#B6B6B6';
    }
  }
}
