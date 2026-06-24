

function launchBrowser(name: string): boolean {
    switch (name.toLowerCase().trim()) {
        case 'chrome':
            console.log('chrome is launched');
            return true;
        case 'firefox':
            console.log('ff is launched');
            return true;
        default:
            console.log('invalid browser');
            return false;
    }
};

let isLaunched = launchBrowser('chrome');
console.log(isLaunched);


//
function getNumber(): Promise<number> {
    return Promise.resolve(100);
}

getNumber().then((res) => console.log(res));

function getTrainerName(): Promise<string> {
    return Promise.resolve('naveen');
}

getTrainerName().then((tr) => console.log(tr));

//
type userType = { name: string, age: number };

function getUserData(): Promise<userType> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                name: 'Anuja',
                age: 30
            };
            resolve(user);
        }, 3000);
    })
};

getUserData().then((myUser) => console.log(myUser));

async function getMyUserData() {
    let myUser = await getUserData();
    console.log(myUser);
};

getMyUserData();

//pw:
function click(element: string): Promise<void> {
    console.log('click on', element);
    return Promise.resolve();//no value
}

//generic util/function:
async function doClick(element: string): Promise<void> {
    await click(element);
}

//in test code:
doClick('forgotPasswordLink');



// let nested = [
//     1,
//     [2, 3],
//     [4, [5]]
// ];

// let res = nested.flat(Infinity);
// console.log(res);