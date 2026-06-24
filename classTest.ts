
//Inheritance: 

class Car {
    start() {
        console.log('Car -- start');
    }

    stop() {
        console.log('Car --- stop');
    }

    refuel() {
        console.log('Car --- refuel');
    }
}

class BMW extends Car {
    override start() {
        console.log('BMW -- start');
    }

    autoParking() {
        console.log('BMW -- auto parking');
    }
}

let bmw: BMW = new BMW();
bmw.start();
bmw.stop();
bmw.refuel();
bmw.autoParking();

console.log('---------');

let car: Car = new Car();
car.start();

console.log('---------');

//child class object can be referred by parent class ref variable:
//Top/Up Casting: IS - A relationship
let c1: Car = new BMW();

c1.start();
c1.stop();
c1.refuel();

//down casting: parent class object can be refered by child class ref variable:
//let b1: BMW = new Car();//IS - A relationship -- FAILED
//not allowed: NA


//access modifiers: public, private, protected
//interface: 


