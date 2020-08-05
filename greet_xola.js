var figlet = require('figlet');
var chalk = require('chalk');
var greet = require("./greet");

figlet(greet('Xola'), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
const styledMessage = chalk.bgGreen.black(data);
console.log(styledMessage)
});