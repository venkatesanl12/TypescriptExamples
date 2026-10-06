

//Abstract class:
//can not create the object of the abstract class
//can have abstract methods: no method body
//can have non abstract methods: have method body
//abs + non abs methods ---> 0 to 100% abstraction: Partial abstraction

abstract class Page {
    constructor() {
        console.log('default page const....');
    }


    abstract title(): void;
    abstract url(): void;

    pageLoading(): void {
        console.log('page is loaded in 20 secs');
    }

    footers(): void {
        console.log('display footer links');
    }
}

class LoginPage extends Page {
    constructor() {
        super();
        console.log('Login page const....');
    }

    override title(): void {
        console.log('Google Login');
    }
    override url(): void {
        console.log('https://google.com/login.html');
    }

    override pageLoading(): void {
        console.log('Login page is loaded in 5 secs');
    }

    doLogin(username: string, password: string): void {
        console.log(username, password, 'logged in to the app');
    }

}

let lp: LoginPage = new LoginPage();
lp.title();
lp.url();
lp.pageLoading();
lp.doLogin('naveen', 'naveen@123');