import { Component, OnInit } from '@angular/core';
import * as data from './service-all.json';

@Component({
  selector: 'app-services-all',
  templateUrl: './services-all.component.html',
  styleUrls: ['./services-all.component.sass']
})
export class ServicesAllComponent implements OnInit {
  services: any = (data as any).default;
  constructor() { }

  ngOnInit(): void {
  }

}
