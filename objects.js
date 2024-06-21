// var user = {}

// // user = 20 

// // spread operator 

// var user1 = {}

// user1.name = user.name
// user1.id = user.id 
// user1.phone = user.phone 
// // we are sopying one by one properties of one objectvinto anoother 

// // in es6 this can be done by 


// var user2 = {...user1}

// var people = ["user1"]
// var people2 = ["user2"]
// var total = [...people,...people2]
// console.log(",,,," ,  total)


var user = {
    name:"Ashu Lekhi",
    role:"Trainer",
    location:"Delhi",
    company:"Lowes"
}

var company = user.company
// taking the value of property into a varibale 
var {role , phone} = user
var role = user.role

console.log(user.company)


console.log(user.company)

// function User({name,id,phone}){
// object destructuring
//}
// User({name:"Ashu" , id:20003})
// props.name
//props.id
















