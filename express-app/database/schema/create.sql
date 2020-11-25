-- RESET IF EXISTS

DROP TABLE IF EXISTS currency
CASCADE;

DROP TABLE IF EXISTS cities
CASCADE;

DROP TABLE IF EXISTS passengers
CASCADE;

DROP TABLE IF EXISTS quotations
CASCADE;

DROP TABLE IF EXISTS transportations
CASCADE;


-- TABLES

CREATE TABLE cities
(
    id SERIAL PRIMARY KEY NOT NULL,
    code CHAR(3) NOT NULL,
    city VARCHAR(255) NOT NULL
);


CREATE TABLE currency
(
    id SERIAL PRIMARY KEY NOT NULL,
    code CHAR(3) NOT NULL
);


CREATE TABLE passengers
(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL
);


CREATE TABLE transportations
(
    id SERIAL PRIMARY KEY NOT NULL,
    t_type VARCHAR(255) NOT NULL
);

CREATE TABLE quotations
(
    id SERIAL PRIMARY KEY NOT NULL,
    origin INTEGER REFERENCES cities(id) ON DELETE CASCADE,
    destination INTEGER REFERENCES cities(id) ON DELETE CASCADE,
    depart_date DATE NOT NULL,
    return_date DATE NOT NULL,
    passenger_id INTEGER REFERENCES passengers(id) ON DELETE CASCADE,
    transport_id INTEGER REFERENCES transportations(id) ON DELETE CASCADE,
    price INTEGER NOT NULL,
    currency_id INTEGER REFERENCES currency(id) ON DELETE CASCADE,
    is_order BOOLEAN NOT NULL DEFAULT FALSE
);


