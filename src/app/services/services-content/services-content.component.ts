import { Component, OnInit } from '@angular/core';
import { Service } from './service.model';

@Component({
  selector: 'app-services-content',
  templateUrl: './services-content.component.html',
  styleUrls: ['./services-content.component.sass']
})
export class ServicesContentComponent implements OnInit {

  services: Service[] = [
    {
      img: '../../assets/img/services-apps.png',
      title: 'Mobile Apps',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
    },
    {
      img: '../../assets/img/services-webservices.png',
      title: 'Web Services',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
    },
    {
      img: '../../assets/img/services-augmented-reality.png',
      title: 'Augmented Reality',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
    },
    {
      img: '../../assets/img/services-design.png',
      title: 'UX/UI Design',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
    },
    {
      img: '../../assets/img/services-development.png',
      title: 'Development',
      // tslint:disable-next-line:max-line-length
      content: 'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


