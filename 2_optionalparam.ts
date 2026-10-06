

//optional param: using ?

function printData(name: string, age?: number): void {
    console.log(name);
    console.log(age);
}
console.log("===========");
printData('Peter');
console.log("===========");
printData('Naveen', 30);

function launchBrowser(browser: string, headless?: boolean): boolean {
    if (headless) {
        console.log('run tcs in ', browser, ' in headless mode:', headless);
        return true;
    }
    else {
        console.log('run tcs in normal mode with: ', browser);
        return true;
    }
}

let isLaunched = launchBrowser('chrome', true);
console.log(isLaunched);

//1. normal params
//2. optional param: ?
//3. rest params: ...
function search(name: string, color: string, price?: number, seller?: string, ...values: any): void {

    if (price && seller) {
        console.log('performing search: ', name, color, price, seller);
    }
    else {
        console.log('performing search: ', name, color);
    }
}

search('macbook pro', 'white', 1000, 'iplanet pvt ltd');
search('macbook pro', 'white');

//function overloading: different functions with the same name and diff params:

//design a proto+type: signature:
function combination(a: number, b: number): number;
function combination(a: string, b: number): string;
function combination(a: string, b: string): string;
function combination(a: number, b: string): string;

//only one:with the body
function combination(a: any, b: any): any {
    return a + b;
}

//calling: 4 signatures
console.log(combination(100, 200));
console.log(combination('tom', 10));
console.log(combination('tom', 'pop'));
console.log(combination(100, 'pop'));



