
// Parent Class 
class Animal { 
    eat() { 
        console.log("Animal is eating."); 
    } 
} 
 
// Child Class 1 
class Dog extends Animal { 
    bark() { 
        console.log("Dog is barking."); 
    } 
} 
 
// Child Class 2 
class Cat extends Animal { 
    meow() { 
        console.log("Cat is meowing."); 
    } 
} 
 
// Creating objects 
let dog = new Dog(); 
let cat = new Cat(); 
 
// Dog methods 
dog.eat(); 
 
   
 
dog.bark(); 
 
// Cat methods 
cat.eat(); 
cat.meow(); 