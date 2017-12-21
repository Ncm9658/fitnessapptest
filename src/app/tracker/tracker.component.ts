import { Component, OnInit } from '@angular/core';
import { TrackerdataService } from '../services/trackerdata.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  name: string;
  time: any;
  sets: number;
  reps: number;
  weight: number;
  user: User;

  constructor(private trackerDataService:TrackerdataService) { }

  ngOnInit() {
    this.trackerDataService.getPosts().subscribe((user) => {
      //console.log(posts);
      this.user = user;
    });
  }

}

interface User {
  name: string;
  time: "0 minutes";
  sets: 0;
  reps: 0;
  weight: 0;
}