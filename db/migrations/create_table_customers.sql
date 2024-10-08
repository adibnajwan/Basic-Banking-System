CREATE TABLE customers (
	customer_id SERIAL PRIMARY KEY,
	customer_name VARCHAR(100) NOT NULL,
	address VARCHAR(255),
	phone_number VARCHAR(15) UNIQUE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	customer_status VARCHAR(10) CHECK (customer_status IN ('active', 'inactive')) DEFAULT 'active' NOT NULL,
	registration_date DATE DEFAULT CURRENT_DATE NOT NULL
);