


//error or exception: Error

//1 -- open browser
//2 -- error -- terminated -- browser = 'naveen'
//handling the error -- try - catch block/finally
//no handling -- throw new Error
//2 -- reading something from the file, 9/0, parsing json to js, work, api data
//3 -- enter the url
//4 - click on button

//5/0
function div(a: number, b: number): number {
    if (b === 0) {
        throw new Error("can not be divided by zero");
    }
    return a / b;
}

let r1 = div(10, 0);
console.log(r1);

//json to JS object
function parsing() {

    try {
        let result = JSON.parse('{"name"=> "Tom"}');
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('close the DB connection');
    }

}

parsing();
console.log('Done');

//

function m1(): never {
    throw new Error('some error');
}

m1();