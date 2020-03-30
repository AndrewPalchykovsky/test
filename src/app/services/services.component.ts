import { Component, OnInit } from '@angular/core';
import { Service } from './service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  showAll = true;
  showApps = true;
  showServices = true;
  showAr = true;
  showDesign = true;
  showDev = true;

  services: Service[] = [
    {
      img: '../../assets/img/services-apps.png',
      title: 'Mobile Apps',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
      link: '/mobile-apps'
    },
    {
      img: '../../assets/img/services-webservices.png',
      title: 'Web Services',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
      link: '/web-services'
    },
    {
      img: '../../assets/img/services-augmented-reality.png',
      title: 'Augmented Reality',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
      link: '/augmented-reality'
    },
    {
      img: '../../assets/img/services-design.png',
      title: 'UX/UI Design',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
      link: '/ux-ui-design'
    },
    {
      img: '../../assets/img/services-development.png',
      title: 'Development',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
      link: '/development'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
