class Person {
    // The base class.
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.login = false;
    }
}

Person.prototype.Myhobbies = function(hobbies) {
    return undefined
}

console.log(Person.__proto__)

class Admin extends Person{
    // A sub-class that inherits from Person class.
    constructor(name, age, task) {
        super(name, age)
        this.task = task
    }
}

class Children extends Person{
    // A sub-class that inherits from Person class.
    constructor(name, age, task, hobbies) {
        super(name, age, hobbies)
        this.task = task
    }
}

Children.prototype.Myhobbies = function(hobbies) {
    console.log(`This are the hobbies: 1.${hobbies[0]}, 2.${hobbies[1]} 3. ${hobbies[2]}`)
}

let myhobbies = Children.prototype.Myhobbies(["chess", "farming", "eating"]);
console.log(myhobbies);


// let firstAdmin = new Admin("John", 30, ["Enroll", "Sudo", "remove"])
// console.log(firstAdmin.name)