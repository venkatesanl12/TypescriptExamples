
//primitve data types:

//let varName:type = value;
let num: number = 100;
console.log(num);
console.log(typeof num);

let username: string = 'admin';
console.log(username);

let isActive: boolean = true;
console.log(isActive);
isActive = false;
console.log(isActive);

let user: null = null;
let x: undefined = undefined;

let distance: bigint = 100n;
console.log(distance + 10n);

let testValue: any;
testValue = 100;
testValue = 'testing';
testValue = true;
console.log(testValue);

let value: unknown = "hello";
console.log(value);
console.log(typeof value);

//void: no return from the function
function testing(): void {
    console.log('hello testing');
};

testing();

function getMarks(stName: string): void {
    console.log(stName, 100);
    console.log(stName.length);
};
getMarks('Tom');

//never: a value which will never occur, will never happen...error, infinite loop
function throwElementError(locator: string): never {
    throw new Error(locator + " is not found error....");
}

function throwEnvNotFoundError(envName: string): never {
    throw new Error("INVALID ENV:" + envName);
}

//throwElementError('loginBtn');
throwEnvNotFoundError('uat');


//union types:
let id: string | number;
id = "abc1245";
id = 12345;
console.log(id);

//arrays:
let marks: number[] = [10, 20, 30, 40];
console.log(marks);
console.log(marks.length);

let devices: string[] = ['macbook pro', 'airtel sim', 'iphone 17', 'imac'];
console.log(devices);

let names: Array<string | number> = ["tom", "kunal", "pooja", 100];
let salary: Array<number> = [100, 200, 300];

//tuple: fixed length array with specific types: static array
let myuser: [string, number] = ['somika', 34.44];
console.log(myuser);

let person: [string, string, number, boolean] = ['tom', 'autom', 12.33, true];


//object:
let newUser = {
    name: 'naveen',
    salary: 12.33,
    isActive: true,
    city: 'Bangalore'
};
console.log(newUser.name);
console.log(newUser);

//custom type for the object: using type alias
type userType = { readonly name: string, salary: number, isActive: boolean, city: string };

let newUser: userType = {
    name: 'naveen',
    salary: 12.33,
    isActive: true,
    city: 'Bangalore'
};

console.log(newUser);
newUser.salary = 15.55;
console.log(newUser);


type orderIDType = string | number;
let orderId: orderIDType = 1234;
orderId = '12345';

type statusCodeType = string | number;
//200, 200 OK, 400 , 400 Bad Request, 401, 401 Unauth

let okStatusCode: statusCodeType = 200;
okStatusCode = '200 OK';
console.log(okStatusCode) ;

let unAuthStatusCode: statusCodeType = 401;
unAuthStatusCode = '401 UnAuth';
console.log(unAuthStatusCode) ;

