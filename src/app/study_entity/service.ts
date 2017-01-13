import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class EntityService {
  private entityUrl = 'http://localhost:4300/api/study_entity';
  constructor(private http: Http) { }
  getEntities(): Promise<Entity[]> {
    return this.http.get(this.entityUrl)
               .toPromise()
               .then(response => response.json() as Entity[]);
  }
  getEntity(id: number): Promise<Entity> {
    const url = `${this.entityUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json() as Entity;
      });
  }
}
