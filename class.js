class Trainee {
    training = "React"

    attendTraining(){
        console.log(this)

        setTimeout(()=>{})
    }
}

var t1 = new Trainee()

t1.attendTraining()


function anjaneyulu(x){
    // x.bind(this)

}
anjaneyulu(function(){})


// arrow function are used to preserve the lexiacal scope of this operator 