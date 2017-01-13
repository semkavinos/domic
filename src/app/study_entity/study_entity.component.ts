import 'rxjs/add/operator/switchMap';
import { Component, OnInit}      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import {Subscription} from 'rxjs/Subscription';

import{EntityService} from './service';
import{Entity} from './entity';
@Component({
  moduleId: module.id,
  selector: 'app-study-entity',
  templateUrl: './study_entity.component.html',
  styleUrls: ['./study_entity.component.css']
})
export class StudyEntityComponent implements OnInit {
  entities: Entity[] = [];
  constructor(private router: Router, private service: EntityService, private route: ActivatedRoute) {}
  getEntities(): void {
    this.service
        .getEntities()
        .then(entities => this.entities = entities);
  }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => {
        return this.service.getEntities();
      })
      .subscribe(entities => {
        this.entities = entities;
      });
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.service.create(name)
      .then(hero => {
        this.entities.push(hero);
      });
  }
}
