import { BROWSERS } from "./enumtest";


let browserName = 'chrome';//coming from csv/config file

switch (browserName) {
    case BROWSERS.CHROME:
        console.log('open chrome');
        break;
    case BROWSERS.FIREFOX:
        console.log('open ff');
        break;

    default:
        break;
}
