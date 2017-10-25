import * as $ from 'jquery';
var finishedcount: number;
var unfinishedcount: number;
finishedcount = 0;
unfinishedcount = 0;

export class Quote {
    text: string
}

export class Exercise {
    reps: number;
    sets: number;
    name: string;
    constructor(n: string, s: number, r: number) {
        this.name = n;
        this.sets = s;
        this.reps = r;
    }
}

export class ExerciseEquip extends Exercise {
    weight: number;
    constructor(n: string, s: number, r: number, w: number) {
        super(n, s, r);
        this.weight = w;
    }
}

export class User {
    name: string = "Nicholas Moy";
    finished: ExerciseEquip[] = [];
    unfinished: ExerciseEquip[] = [];
    weight: number;
    picture: string;
    constructor() {
        this.finished;
        this.unfinished;
    }

    drawFinished(){
        $("#finished").html(
            me.finished.map( x => `<li class="list-group-item">${x.name}: Weights: ${x.weight}, Sets: ${x.sets}, Reps: ${x.reps}</li>` ).join("")
        );
    }
    drawUnfinished() {
        $("#unfinished").html(
            me.finished.map( y => `<li class="list-group-item">${y.name}: Weights: ${y.weight}, Sets: ${y.sets}, Reps: ${y.reps}</li>` ).join("")
        );
    }
    drawPicture() {
        $("#picture").attr("src", this.picture);
    }
}

$("#addfinished").on("click", function () {
    $(function () {
        finishedcount++;
        $("#add1").html(`<p>Finished: ${finishedcount}</p>`);
    });
});

// Controller
const me = new User();
me.drawFinished();
me.drawUnfinished();
