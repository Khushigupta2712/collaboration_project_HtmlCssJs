// This is an example of a simple object 
// Commonly called object literal
// Dynamically generared objects are the opposite.
const person1 = {
    name: ['Sebastian', 'Opiyo'],
    age: 23,
    gender: 'Male',
    hobbies: {
        dancing:'Hip Hop',
        games:'chess'
    },
    bio: function(){
        // "this" keyword refers to the object we are in.
        // instead of for example saying person.age within the person object
        // we say this.age 
        alert(this.name[0] + ' is ' + this.age + 'years and he likes playing ' + this.hobbies.games)
    }
}

// dot.notation
person.name
person.bio()

// Alternative
person['name']
person['bio']

// Updating/setting the objects
person.age = 30;
person['name'][0] = "Alex";

// An example of where bracket notation comes in handy
let personHeight = "height";
let personHeightValue = '12.4m';

// lets update the object
person['personHeight'] = personHeightValue;