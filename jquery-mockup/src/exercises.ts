import * as $ from 'jquery';

export class Exercise {
    reps: number;
    sets: number;
    name: string;
    weight: number;

    constructor(n: string, s: number, r: number) {
        this.name = n;
        this.sets = s;
        this.reps = r;
    }
}

export class ExerciseEquip extends Exercise {
    weight: number;
    time: string;
    constructor(n: string, t:string, s: number, r: number, w: number) {
        super(n, s, r);
        this.weight = w;
        this.time = t;
    }
}

export class User {
    name: string = "Nicholas Moy";
    listOfExercises: ExerciseEquip[] = [
        { name: "Running", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
        { name: "Swimming", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
        { name: "Jumping Jacks", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
        { name: "Weight Lifting", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
        { name: "Push Ups", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
        { name: "Sit Ups", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
        { name: "Chin Ups", time: "0 minutes", sets: 0, reps: 0, weight: 0 }
    ];
    completedExercises: ExerciseEquip[] = [];

    drawListOfExercises(){
        $("#listOfExercises").html(
            this.listOfExercises.map( x => '<li class="list-group-item">' + x.name + '</li>' ).join("")
        );
    }
    drawCompleted(){
        $("#completedExercises").html(
            this.completedExercises.map( x => '<li class="list-group-item">'+ x.name + " Time: " + x.time + " Sets: " + x.sets + " Reps: " + x.reps + " Weight: " + x.weight + '</li>' ).join("")
        );
    }
}

// Controller
const user = new User();
let empty: boolean = true;
user.drawListOfExercises();

$(".list-group-item").click(function(e) {
    e.preventDefault();
    var t = (<HTMLInputElement>document.getElementById("t")).value;
    var s = parseFloat((<HTMLInputElement>document.getElementById("s")).value);
    var r = parseFloat((<HTMLInputElement>document.getElementById("r")).value);
    var w = parseFloat((<HTMLInputElement>document.getElementById("w")).value);
    if (t.length < 1) {
        t = "0 minutes";
    }
    if (isNaN(s)) {
        s = 0;
    }
    if (isNaN(r)) {
        r = 0;
    }
    if (isNaN(w)) {
        w = 0;
    }
    var nameOfWorkout = e.target.textContent;
    var newWorkoutList = new ExerciseEquip(nameOfWorkout, t, s, r, w);
    user.completedExercises.push(newWorkoutList);
    console.log(JSON.stringify(user.listOfExercises));
    user.drawCompleted();
});
  
  $(".btn").click(function(e) {
      e.preventDefault();
    var nameOfWorkout = (<HTMLInputElement>document.getElementById("name")).value;  
    var t = (<HTMLInputElement>document.getElementById("t")).value;
    var s = parseFloat((<HTMLInputElement>document.getElementById("s")).value);
    var r = parseFloat((<HTMLInputElement>document.getElementById("r")).value);
    var w = parseFloat((<HTMLInputElement>document.getElementById("w")).value);
    var nameOfWorkout = e.target.textContent;
    var newWorkoutList = new ExerciseEquip(nameOfWorkout, t, s, r, w);
    user.completedExercises.push(newWorkoutList);
    console.log(JSON.stringify(user.listOfExercises));
    user.drawCompleted();
  });
  
