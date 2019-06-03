// set up npms
// mySQL npm
var mysql = require("mysql");
// inquirer will allow me to use prompts.
var inquirer = require("inquirer");
// using dotenv to hide log in info for mySQL
var dotenv = require("dotenv").config();
// keys
var keys = require("./key");

// sets up mysql connection
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: keys.login.user,
    password: keys.login.pass,
    database: "bamazon_db"
});

// the prompt using inquirer
inquirer.prompt([
    {
        // prompt: asks what item id you want
      name: "product",
      message: "what's the product id of the item you want to buy?"
    }, {
        // prompt: asks how many you want
      name: "quantity",
      message: "How many would you like?"
    }
  ]).then(function(answers) {
    var order = {
        product: answers.product,
        quantity: answers.quantity
    }
    console.log(order);
  });

// take in answers.

// use answers to check db for quantities

// respond based on db check

// log purchase and update db
