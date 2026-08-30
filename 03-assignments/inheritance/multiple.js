// Parent 1 
class Father { 
    work() { 
        console.log("Father is working."); 
    } 
} 
 
// Parent 2 
const Mother = { 
    cook() { 
        console.log("Mother is cooking."); 
    } 
}; 
 
// Child Class 
class Child extends Father { 
    study() { 
        console.log("Child is studying.");
           } 
} 
 
// Add Mother's methods 
Object.assign(Child.prototype, Mother); 
 
// Create object 
let child = new Child(); 
 
// Calling methods 
child.work(); 
child.cook(); 
child.study();