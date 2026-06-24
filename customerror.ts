
//custom error classes:

class ElementError extends Error {
    constructor(message: string) {
        super(message);
    }

}

class BrowserError extends Error {
    constructor(message: string) {
        super(message);
    }

}

class FrameworkError extends Error {
    constructor(message: string) {
        super(message);
    }

}


let browser = 'naveen';
switch (browser) {
    case 'chrome':
        console.log('open chrome');
        break;

    default:
        console.log('plz pass the right browser name....');
        throw new BrowserError('==INVALID BROWSER== ' + browser);
}

console.log('entering the app url');