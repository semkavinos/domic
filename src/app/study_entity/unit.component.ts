import 'rxjs/add/operator/switchMap';
import { Component, OnInit}      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {Subscription} from 'rxjs/Subscription';

import{EntityService} from './service';
import{Entity} from './entity';
@Component({
  moduleId: module.id,
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  entity: Entity = new Entity();
  constructor(private route: ActivatedRoute, private service: EntityService) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => {
        return this.service.getEntity(+params['id']);
      })
      .subscribe(entity => {
        this.entity = entity;
      });
  }
}
