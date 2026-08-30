// Grandparent Class 
class Animal { 
    eat() { 
        console.log("Animal is eating."); 
    } 
} 
 
// Parent Class 
class Dog extends Animal { 
    bark() { 
        console.log("Dog is barking."); 
    } 
} 
 
// Child Class 
class Puppy extends Dog { 
    play() { 
        console.log("Puppy is playing."); 
    } 
} 
 
// Creating object of Child Class 
let puppy = new Puppy(); 
 
// Calling inherited methods 
puppy.eat(); 
puppy.bark(); 
 
// Calling child class method 
puppy.play();