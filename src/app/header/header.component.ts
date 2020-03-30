import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    this.isHidden = true;
  }

}
