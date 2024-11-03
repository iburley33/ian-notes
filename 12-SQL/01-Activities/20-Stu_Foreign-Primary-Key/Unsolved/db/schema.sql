-- Write your Schema Here -- 
DROP DATABASE IF EXISTS cst_orders_db;
CREATE DATABASE cst_orders_db;

USE cst_orders_db;

CREATE TABLE customer (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE customr_order (
    id INT NOT NULL,
    customer_id INT NOT NULL,
    order_details TEXT NOT NULL,
    FOREIGN KEY (customer_id)
        REFERENCES customer(id),
);