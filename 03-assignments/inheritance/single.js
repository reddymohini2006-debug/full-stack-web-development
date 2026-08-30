// Parent Class 
class Animal { 
    constructor(name) { 
        this.name = name; 
    } 
 
    eat() { 
        console.log(this.name + " is eating."); 
    } 
} 
 
// Child Class 
class Dog extends Animal { 
    bark() { 
        console.log(this.name + " is barking."); 
    } 
} 
 
// Creating object of Child Class 
let dog = new Dog("Bruno"); 
 
// Calling inherited method 
dog.eat();
// Calling child class method 
dog.bark();  
 
