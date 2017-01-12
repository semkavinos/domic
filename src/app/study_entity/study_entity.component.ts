import { Component } from '@angular/core';


@Component({
  selector: 'app-study_entity',
  templateUrl: './study_entity.component.html',
  styleUrls: ['./study_entity.component.css']
})
export class Study_entityComponent {

  entity: {
    name: string,
    content: {
      html: string,
    }
  };

  constructor() {
    this.entity = {
       name: 'This is a sample study entity',
       content: {
         html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>',
       }
    }
  }
}