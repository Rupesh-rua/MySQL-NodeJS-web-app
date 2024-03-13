USE project_test; 

INSERT INTO customer VALUES
(1, 'Jones', 'John', '1234567890', 'IND', 'abcdefg123'),
(2, 'Smith', 'Megan', '0987654321', 'IND', '1234567890'),
(3, 'Doe', 'Jane', '8795674839', 'BUS', 'qwertyuiopa'),
(4, 'Ellis', 'Brad', '3948576502', 'IND', 'abcde12345'),
(5, 'Myers', 'Michelle', '2341785938', 'BUS', '12345abcde'); 

INSERT INTO home_address VALUES
(1, '342 West St', 'Lykens', 'PA', 17048, 'M', 35, 45000),
(2, '1900 Pier St',  'Pittsburgh', 'PA', 15213, 'F', 43, 85000),
(4, '867 Thompson Ave', 'Philadelphia', 'PA', 19050, 'M', 56, 125000);

INSERT INTO bus_address VALUES
(3, '2500 Electric Ave', 'Lewistown', 'PA', 17044, 'Manufacturing', '2000000'),
(5, '657 Market St', 'Gratz', 'PA', 17030, 'Technology', '6500000'); 

INSERT INTO employee VALUES
(1, 'White', 'Francine', 'fw23@gmail.com', 'Salesperson', 33000, 'abcdef12345'),
(2, 'Lowe', 'Ted', 'teddyl@yahoo.com', 'Salesperson', 36000, 'abcdefg2468'), 
(3, 'Witmer', 'Robert', 'rwman@gmail.com', 'Store Manager', 53000, '12345123456'), 
(4, 'Harris', 'Emma', 'emmaincharge@gmail.com', 'Regional Manager', 73000, '0123456789'),
(5, 'Ford', 'Betty', 'fordb11@gmail.com', 'Salesperson', 42000, '0987654321'), 
(6, 'Washington', 'Barry', 'bwman@gmail.com', 'Store Manager', 57000, 'asdfghjklzx'), 
(7, 'Zimmerman', 'Helena', 'hezim@gmail.com', 'Salesperson', 28000, '24681357abc'), 
(8, 'Dorian', 'John', 'jdmanager@gmail.com', 'Regional Manager', 70000, 'mnbvcxzlkj') ; 

INSERT INTO emp_address VALUES
(1, '434 North St', 'Store Town', 'PA', 12432),
(2, '1876 East St', 'Store Town', 'PA', 12432), 
(3, '23 Alvira Way', 'Storeville', 'PA', 14958),
(4, '76 Excess St', 'Store Town', 'PA', 12432),
(5, '834 Long Ave', 'Storeville', 'PA', 14958),
(6, '976 Short St', 'Store Town', 'PA', 12432),
(7, '7143 Express Blvd', 'Store Town', 'PA', 12432), 
(8, '342 West St', 'Pittsburgh', 'PA', 15213);

INSERT INTO region VALUES
(1, 'North'),
(2, 'South');

INSERT INTO store VALUES
(1, 3, 1),
(2, 3, 2);

INSERT INTO region_manager VALUES
(4, 1),
(8, 2);

INSERT INTO store_address(sid, line1, city, state, zip) VALUES
(1, "236 Liberty Ave", "Pittsburgh", "PA", 15213),
(2, "236 Pier St", "Pittsburgh", "PA", 15213);

INSERT INTO works_in VALUES
(1, 1),
(2, 2),
(3, 2),
(5, 1),
(6, 2),
(7, 1);

INSERT INTO cars VALUES
('MVJ48UI7360PTREWT', 'Ford', 'F-150', 2017, 'Red', 4, 10500, 'Truck'), 
('ATUF874OKN8U0OT34', 'Honda', 'Accord', 2020, 'Red', 7, 15000, 'Car'), 
('VPE46U8I2NF0K4L3S', 'Nissan', 'Altima', 2011, 'Blue', 1, 6000, 'Car'), 
('NVKF840FKSL3V98DJ', 'Toyota', 'RAV-4', 2017, 'Blue', 4, 10500, 'SUV'), 
('AOFJG859GJFI0PP4O', 'Subaru', 'Outback', 2012, 'Green', 4, 10500, 'SUV'), 
('VUR7488IDJEU345HD', 'Chevrolet', 'Trailblazer', 2003, 'Silver', 1, 10500, 'SUV'), 
('CNVHF84756FHDJEIW', 'Ford', 'Taurus', 2016, 'White', 4, 10500, 'Car'), 
('XHS746FYTH834RHK9', 'Dodge', 'Dart', 2020, 'Orange', 4, 10500, 'Car'), 
('Q1275HHFYRU857R6F', 'Chevrolet', 'Equinox', 2017, 'Black', 4, 10500, 'Car'), 
('NVHFKEIRUT75849KD', 'Nissan', 'Sentra', 2015, 'Red', 4, 10500, 'Car'), 
('LAJFH48FUT77GYFHJ', 'Honda', 'Civic', 2014, 'Green', 4, 10500, 'Car'), 
('LAKD4857FHHFDJ483', 'Dodge', 'Durango', 2013, 'Yellow', 4, 10500, 'SUV'), 
('ALDKFJGUT8493FIGG', 'Nissan', 'Armada', 2017, 'Green', 4, 10500, 'SUV'), 
('DJFUG85757YTUTURF', 'Honda', 'Pilot', 2017, 'White', 4, 10500, 'Car'), 
('MDJF857GGHUF9024S', 'Toyota', 'Prius', 2017, 'White', 4, 10500, 'Car'), 
('XDHFUG748DKEMF93J', 'GMC', 'Sierra', 2017, 'Blue', 4, 10500, 'Truck'),
('QWE85FJVN3O3JFLF4', 'Cadillac', 'Escalade', 2017, 'Red', 4, 10500, 'SUV'), 
('SKFLVL390DIOFKDL3', 'Lincoln', 'Town Car', 2017, 'Black', 4, 10500, 'Car'), 
('NFJSDIUFHNJWKL3U4', 'Ford', 'Mustang', 2017, 'Black', 4, 10500, 'Car'), 
('QWUIDNFSJKLT23948', 'Dodge', 'Charger', 2017, 'Silver', 4, 10500, 'Car');