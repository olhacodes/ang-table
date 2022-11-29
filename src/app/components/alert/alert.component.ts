import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: []
})
export class AlertComponent implements OnInit {
  @Input() type: string;
	@Input() message: string;
  @Input() isVisible = true;
  constructor() { }

  ngOnInit(): void {
  }

}
