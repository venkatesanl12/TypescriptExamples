

//interface: prototype for the objects and classes
//can not create the object of Interface
//only method declaration: no method body: no buss logic

//interface with objects: define the shape / blueprint of the object:

interface User {
    name: string;
    age: number;
    salary?: number;
    readonly compName: string;
    city: string,
    coding(): void;
    calcSal(): number;
}

let u1: User = {
    name: 'Gaurav',
    age: 30,
    compName: 'IBM',
    salary: 12.33,
    city: 'LA',
    coding(): void {
        console.log(`${this.name} is coding`);
    },
    calcSal(): number {
        return 100;
    }
}

console.log(u1);
u1.coding();
console.log(u1.calcSal());

let u2 = {

}