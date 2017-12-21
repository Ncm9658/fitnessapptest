import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string = 'Steve Smith';
  age: number;
  email: string; 
  address: Address;
  exercises: string[];
  hello: any;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor ran..');

  }

  ngOnInit() {
    console.log('ngOninit ran..');
    this.name = 'John Doe';
    this.age = 30;
    this.address = {
      street: '50 main street',
      city: 'boston',
      state: 'MA'
    }
    this.exercises = ['Write code', 'Watch movies', 'Listen to music'];

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Brad Traversy';
    this.exercises.push('New Exercise');
  }

  addExercise(exercise: string) {
    console.log(exercise);
    this.exercises.unshift(exercise);
    return false;
  }

  deleteExercise(exercise: string) {
    for(let i = 0; i <this.exercises.length; i++) {
      if (this.exercises[i] == exercise) {
        this.exercises.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}