import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  btnClass:string = 'primarily';
  constructor() { }

  ngOnInit(): void {
  }

}
