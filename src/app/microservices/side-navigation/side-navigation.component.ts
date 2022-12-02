import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  @Input() status: boolean = true;
  isSrviceOpened: boolean = false;

  ngOnInit(): void {
  }

  onOpen(serviceName: string): void {
    this.isSrviceOpened = !this.isSrviceOpened;
    if(this.isSrviceOpened) {
      alert(serviceName + ' opened successfully')
    }
  }
}
