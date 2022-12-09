import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrls: ['./table-title.component.scss']
})
export class TableTitleComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
 
  constructor() { }

  ngOnInit(): void {
    this.renderIcon()
  }

  renderIcon() {
    this.icon = `../../../assets/images/icon-${this.icon.replace(' ', '-').toLocaleLowerCase()}.svg`
  }
}
