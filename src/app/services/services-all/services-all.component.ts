import { Component, OnInit } from '@angular/core';
import { Service } from './service.model';

@Component({
  selector: 'app-services-all',
  templateUrl: './services-all.component.html',
  styleUrls: ['./services-all.component.sass']
})
export class ServicesAllComponent implements OnInit {

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
