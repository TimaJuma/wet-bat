INSERT INTO cities
    (code, city)
VALUES
    ('YYC', 'Calgary'),
    ('LHR', 'London'),
    ('SVO', 'Moscow'),
    ('JFK', 'New York'),
    ('CDG', 'Paris'),
    ('YYZ', 'Toronto'),
    ('YYJ', 'Vancouver');



INSERT INTO currency
    (code)
VALUES
    ('CAD'),
    ('GBP'),
    ('EUR'),
    ('RUB'),
    ('USD');

INSERT INTO passengers
    (first_name, last_name, email, phone)
VALUES
    ('Alice', 'Alison', 'a@gmail.com', '555-1111'),
    ('Bob', 'Bobson', 'b@gmail.com', '555-2222'),
    ('Charlie', 'Charliz', 'c@gmail.com', '555-3333'),
    ('Den', 'Denver', 'd@gmail.com', '555-4444'),
    ('Eve', 'Elkman', 'e@gmail.com', '555-5555'),
    ('Frank', 'Frosts', 'f@gmail.com', '555-6666');

INSERT INTO transportations
    (t_type)
VALUES
    ('Bus'),
    ('Car'),
    ('Ferry'),
    ('Plane'),
    ('Train');


INSERT INTO quotations
    (origin, destination, depart_date, return_date, passenger_id, transport_id, price, currency_id)
VALUES
    (1, 6, '2020-11-21 12:00:00', '2020-11-29 12:00:00', 1, 5, 120000, 1),
    (4, 5, '2020-10-20 12:00:00', '2020-12-19 12:00:00', 2, 4, 170000, 1),
    (4, 2, '2020-09-19 12:00:00', '2020-12-19 12:00:00', 3, 3, 210000, 1),
    (1, 7, '2020-08-18 12:00:00', '2020-10-19 12:00:00', 4, 1, 50000, 1);
