// 1. Define an Interface to describe the shape of an object::
interface User {
  name: string;
  id: number;
  isActive: boolean;
}

// 2. Create a class that implements the interface
class UserAccount {
  name: string;
  id: number;
  isActive: boolean;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.isActive = true;
  }

  // 3. A method with a return type annotation
  greet(): string {
    return `Hello, ${this.name}! Your ID is ${this.id}.`;
  }
}

// 4. Create an instance of the class
const newUser = new UserAccount("Alice", 101);

// 5. Output the result to the console
console.log("Welcome to Type Script World" );
console.log("====");

console.log(newUser.greet());



