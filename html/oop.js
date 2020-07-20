/*
// First example.
function School(name){
    const obj = {};
    obj.name = name;
    obj.display = function(){
        console.log("The name of the school is "+ obj.name)
    }
    return obj
}

// instantiate the first obj
const School1 = School("Alliance");
console.log(School1.display());
console.log(School1.name);

// instantiate the second obj
const School2 = School("Mwikhomo");
console.log(School2.display());
console.log(School2.name);
*/

// template/blueprint/class
function School(name){
    this.name = name;
    this.display = function(){
        console.log("The name of the school is "+ this.name)
    }
}

// don't forget the "new" term
// each object has its own namespace.
const School1 = new School("Alliance");
console.log(School1.display());
console.log(School1.name);


// Students class.
function Students(firstName, lastName, age, gender, subjects){
    this.name = {
        first: firstName,
        last: lastName
    };
    this.age = age
    this.gender = gender
    this.subjects = subjects
    this.displayBio = function(){
        console.log("The student's name is "+ this.name.first + " " + this.name.last)
        console.log("The student's gender is "+ this.gender )
        console.log("The student's best subject is "+ this.subjects[0] )
    }
}

let student1 = 

