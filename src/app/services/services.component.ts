import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  showContent = 'All';
  showAll = true;
  showMobile: boolean;
  showWeb: boolean;
  showAr: boolean;
  showDesign: boolean;
  showDev: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  showAllClick() {
    this.showContent = 'All';
    this.showAll = true;
    this.showMobile = false;
    this.showWeb = false;
    this.showAr = false;
    this.showDesign = false;
    this.showDev = false;

  }
  showMobileClick() {
    this.showContent = 'Mobile';
    this.showAll = false;
    this.showMobile = true;
    this.showWeb = false;
    this.showAr = false;
    this.showDesign = false;
    this.showDev = false;
  }

  showWebClick() {
    this.showContent = 'Web';
    this.showAll = false;
    this.showMobile = false;
    this.showWeb = true;
    this.showAr = false;
    this.showDesign = false;
    this.showDev = false;
  }
  showArClick() {
    this.showContent = 'Ar';
    this.showAll = false;
    this.showMobile = false;
    this.showWeb = false;
    this.showAr = true;
    this.showDesign = false;
    this.showDev = false;
  }

  showDesignClick() {
    this.showContent = 'Design';
    this.showAll = false;
    this.showMobile = false;
    this.showWeb = false;
    this.showAr = false;
    this.showDesign = true;
    this.showDev = false;
  }
  showDevClick() {
    this.showContent = 'Dev';
    this.showAll = false;
    this.showMobile = false;
    this.showWeb = false;
    this.showAr = false;
    this.showDesign = false;
    this.showDev = true;
  }


}
