const chalk = require("chalk");

// console.log(chalk.blue.inverse("success"));

const validator = require("validator");
const res = validator.isEmail("niluofficially@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
