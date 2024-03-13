DROP DATABASE IF EXISTS project_test;

CREATE DATABASE project_test;

USE project_test;

DROP TABLE IF EXISTS cars;

CREATE TABLE IF NOT EXISTS cars(
	vin varchar(17) NOT NULL, 
    make varchar(30) NOT NULL, 
    model varchar(30) NOT NULL,
    year int NOT NULL, 
    color varchar(15) NOT NULL, 
    inventory int NOT NULL, 
    price double NOT NULL,
    kind varchar(10),
    PRIMARY KEY (vin) ); 

DROP TABLE IF EXISTS customers;

CREATE TABLE IF NOT EXISTS customer(
	cid int NOT NULL,
    lastName varchar(25),
    firstName varchar(25), 
    phone varchar(10),
    type varchar(3),
    password varchar(20),
    PRIMARY KEY (cid) );

DROP TABLE IF EXISTS home_address;

CREATE TABLE IF NOT EXISTS home_address(
	cid int NOT NULL,
    street varchar(30),  
    city varchar(15), 
    state varchar(2), 
    zip int, 
    gender varchar(1), 
    age int, 
    income double, 
    PRIMARY KEY (cid), 
    FOREIGN KEY (cid) REFERENCES customer(cid) ON UPDATE CASCADE ON DELETE CASCADE );
    
DROP TABLE IF EXISTS bus_address;

CREATE TABLE IF NOT EXISTS bus_address(
	cid int NOT NULL, 
    street varchar(30), 
    city varchar(15), 
    state varchar(2), 
    zip int, 
    bus_category varchar(25), 
    annual_income double, 
    PRIMARY KEY (cid), 
    FOREIGN KEY (cid) REFERENCES customer (cid) ON UPDATE CASCADE ON DELETE CASCADE ); 
    
DROP TABLE IF EXISTS employee;

CREATE TABLE IF NOT EXISTS employee(
	eid int NOT NULL, 
    lastName varchar(15), 
    firstName varchar(15), 
    email varchar(25), 
    title varchar(25), 
    salary double,
    password varchar(20), 
    PRIMARY KEY (eid) ); 
    
DROP TABLE IF EXISTS emp_address;

CREATE TABLE IF NOT EXISTS emp_address(
	eid int NOT NULL, 
    line1 varchar(30), 
    city varchar(15), 
    state varchar(2), 
    zip int, 
    PRIMARY KEY (eid),
    FOREIGN KEY (eid) REFERENCES employee (eid) ON UPDATE CASCADE ON DELETE CASCADE);
    
DROP TABLE IF EXISTS region;

CREATE TABLE IF NOT EXISTS region( 
	rid int NOT NULL, 
    name varchar(10), 
    PRIMARY KEY (rid) ); 
    
DROP TABLE IF EXISTS region_manager;

CREATE TABLE IF NOT EXISTS region_manager(
	mid int NOT NULL,
    rid int NOT NULL,
    PRIMARY KEY (mid, rid),
    FOREIGN KEY (mid) REFERENCES employee (eid) ON UPDATE CASCADE ON DELETE CASCADE, 
    FOREIGN KEY (rid) REFERENCES region (rid) ON UPDATE CASCADE ON DELETE CASCADE);
    
DROP TABLE IF EXISTS store;

CREATE TABLE IF NOT EXISTS store(
	sid int NOT NULL, 
    num_employees int, 
    region int, 
    PRIMARY KEY (sid),
    FOREIGN KEY (region) REFERENCES region (rid) ON UPDATE CASCADE ON DELETE CASCADE);
    
DROP TABLE IF EXISTS store_address;

CREATE TABLE IF NOT EXISTS store_address(
	sid int NOT NULL, 
    street varchar(30), 
    city varchar(15), 
    state varchar(2), 
    zip int, 
    PRIMARY KEY (sid), 
    FOREIGN KEY (sid) REFERENCES store (sid) ON UPDATE CASCADE ON DELETE CASCADE); 

DROP TABLE IF EXISTS store_manager;

CREATE TABLE IF NOT EXISTS store_manager(
	mid int NOT NULL, 
    sid INT NOT NULL, 
    PRIMARY KEY (mid, sid), 
    FOREIGN KEY (mid) REFERENCES employee (eid) ON UPDATE CASCADE ON DELETE CASCADE, 
    FOREIGN KEY (sid) REFERENCES store (sid) ON UPDATE CASCADE ON DELETE CASCADE);    

DROP TABLE IF EXISTS works_in;

CREATE TABLE IF NOT EXISTS works_in(
	eid int NOT NULL,
    sid int NOT NULL, 
    PRIMARY KEY (eid, sid), 
    FOREIGN KEY (eid) REFERENCES employee (eid) ON UPDATE CASCADE ON DELETE CASCADE, 
    FOREIGN KEY (sid) REFERENCES store (sid) ON UPDATE CASCADE ON DELETE CASCADE);
    
DROP TABLE IF EXISTS transaction;

CREATE TABLE IF NOT EXISTS transaction(
	order_num INT NOT NULL,
    customer INT NOT NULL,
    date DATE NOT NULL,
    salesperson INT NOT NULL,
    product varchar(17) NOT NULL,
    quantity INT NOT NULL,
    tot_price DOUBLE NOT NULL,
    PRIMARY KEY(order_num), 
    FOREIGN KEY(customer) REFERENCES customer(cid) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(salesperson) REFERENCES employee(eid) ON UPDATE CASCADE ON DELETE CASCADE, 
    FOREIGN KEY(product) REFERENCES cars(vin) ON UPDATE CASCADE ON DELETE CASCADE);
    