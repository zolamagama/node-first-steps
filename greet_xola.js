var figlet = require('figlet');
var chalk = require('chalk');
figlet('Hello Zola!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
const styledMessage = chalk.bgGreen.black(data);
console.log(styledMessage)});