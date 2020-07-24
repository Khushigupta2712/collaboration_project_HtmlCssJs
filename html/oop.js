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

/*
*******************************************************************************************
*                        MODERN APPROACH                                                  *
*******************************************************************************************
*/


// Advance Example1
// template/blueprint/class
// function Instution(name, location, category){
//     this.name = name;
//     this.location = location;
//     this.category = category;
// }

// // Define methods for the Institution class
// Instution.prototype.display = function(){
//     if (this.category === "Primary" || this.category === "primary" ||
//     this.category === "pri"){
//         console.log("The name of the Primary School is "+ this.name)
//     }else if (this.category === "Secondary" || this.category === "secondary" ||
//     this.category === "Sec.") {
//         console.log("The name of the Secondary school is "+ this.name)
//     }else if (this.category === "University" || this.category === "university" ||
//     this.category === "Uni.") {
//         console.log("The name of the Higher Institution of Learning is "+ this.name)
//     }else {
//         console.log("The name of the Technical Institution is "+ this.name)
//     }
   
// }

// // don't forget the "new" term
// // each object has its own namespace.
// const School1 = new Instution("Alliance", "Nairobi", "Primary");
// // console.log(School1.display("Sec."));



// // Students class.
// function Students(firstName, lastName, age, gender, subjects){
//     Instution.apply();
//     // call
//     // super
//     this.name = {
//         first: firstName,
//         last: lastName
//     };
//     this.age = age
//     this.gender = gender
//     this.subjects = subjects
//     this.displayBio = function(){
//         console.log("The student's name is "+ this.name.first + " " + this.name.last)
//         // console.log("The student's gender is "+ this.gender )
//         // console.log("The student's best subject is "+ this.subjects[0] )
//     }
// }

// // Add methods for students
// Students.prototype.schoolName = function() {
//     School1.display();
//     console.log(`The school is located at: ${School1.location}`)
//     // console.log("The school is located at:" + School1.location)
// }

// let student1 = new Students("Jack", "Jill", 23, "Male", ["Math", "Biology"])
// // console.log(student1.schoolName());
// // console.log(student1.displayBio())
// // console.log(student1.name.first)
// // console.log(student1.display())
// console.log(student1.__proto__)
// console.log(Instution.__proto__.__proto__)

/*
*******************************************************************************************
*                        CLASSICAL APPROACH                                               *
*******************************************************************************************
*/


// --> A class is ideally a function.
// class Superhero {
//     constructor(name, age, weapon) {
//         this._name = name;
//         this._age = age;
//         this._weapon = weapon;
//     }
// }

// Alternative.
// function Superhero(name, age, weapon) {
//     this.name = name;
//     this.age = age;
//     this.weapon = weapon;
// }

// let superman1 = new Superhero("Jeet", 20, "Knine");
// console.log(`The superman's weapon is a: ${superman1._weapon}`)

// console.log(typeof Superhero); // logs 'function'

// ---------------------------------------------------------------------------------
// Creating a Constructor

/*
class Horse {
    constructor(name, furColor, age) {
        this._name = name;
        this._furColor = furColor;
        this._age = age;
    }
}

const horse = new Horse('Trendafil', 'brown', 2);
console.log(horse); 
// { _name: 'Trendafil', _furColor: 'brown', age: 2 }

*/

// WHAT HAPPENS WHEN WE USE "new" key work to instantiate an object

// function F() {
//     console.log(this);
//     this.prop = 'hello';
// };

// const f = new F();
// console.log(f); // { prop: 'hello' }

// The new keyword sets the context of the function to a new object
// The result of the function execution will be the new object


// THE CLASS CONSTRUCTOR.
// The class constructor is a kind-of-function 
// that is called with new and is executed when an object of a class is created
// Class constructors are obligatory and can be omitted. The following two snippets are equivalent:

/*
// Example 1
class Superhero { }

const gosho = new Superhero();
*/

/*
// Example 2
class Superhero {
    constructor() { }
}

const gosho = new Superhero();
 */