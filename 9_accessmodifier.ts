

// public private protected - access modifiers

class User {

    public testing(): void {
        console.log('testing method');
    }

    private coding(): void {
        console.log('coding');
    }

    public doCoding(): void {
        this.coding();
    }

    protected management(): void {
        console.log('management');
    }

}

class Employee extends User {

    public working(): void {
        this.testing();
        this.management();
        this.doCoding();
        let e1: Employee = new Employee();
        
    }

}

let e:Employee = new Employee();
e.working();

//outside of the class
let u1: User = new User();
u1.testing();
u1.management(); // Error: Property 'management' is protected and only accessible within class 'User' and its subclasses.



