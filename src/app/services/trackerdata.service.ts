import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TrackerdataService {

  constructor(public http: Http) {
    console.log('Data service connected...');
  }

  getPosts() {
    return this.http.get('/assets/tracker.json')
      .map((res:any) => res.json());
  }
}
