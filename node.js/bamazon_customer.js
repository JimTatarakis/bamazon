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
// runs mySQL connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
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
]).then(function (answers) {
    var order = {
        product: answers.product,
        quantity: answers.quantity
    }
    // log order
    console.log('Your order has been placed!');

    // make order for db
    function productOrdered() {
        connection.query("SELECT * FROM products WHERE item_id = ?", VALUES = answers.product, function (err, res) {
            if (err) {
                console.log('item may not be avaialable. please try another item..')
                throw err;
            }
            // check if item has enough stock
            var newStock = res[0].stock_quantity - order.quantity;

            // make a variable for the total amount of order
            var orderTotal = order.quantity * res[0].price;

            // respond based on db check
            if (newStock < 0) {
                console.log('not enough inventory at the moment!');
            }

            else {
                // update item inventory
                connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: newStock
                        },
                        {
                            item_id: order.product
                        }
                    ]
                );
                // log purchase with cost to customer
                console.log('Your total today is $ ' + orderTotal + '. \nThank you for your patronage!');
            };

            connection.end();
        });
    }
    productOrdered();
});