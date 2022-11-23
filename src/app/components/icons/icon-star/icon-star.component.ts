import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-star',
  templateUrl: './icon-star.component.html',
  styleUrls: []
})
export class IconStarComponent implements OnInit {
  isIconClicked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  OnChangeColor() {
    this.isIconClicked = !this.isIconClicked;
  }

}
