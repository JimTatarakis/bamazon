CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(5) NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('dish soap','kitchen',1.99,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('dish rack','kitchen',4.99,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('sponge','kitchen',2.99,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('car jack','auto',89.99,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('tire cleaner','auto',6.99,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('car vacuum','auto',19.99,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('playing cards','games',1.99,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('dominoes','games',4.99,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('monopoly','games',11.99,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES('milk','food',3.99,1000);