CREATE TABLE accounts (
	account_id SERIAL PRIMARY KEY,
	account_number VARCHAR(20) UNIQUE NOT NULL,
	customer_id INT NOT NULL,
	account_type VARCHAR(10) CHECK (account_type IN ('savings', 'current')) NOT NULL,
	balance DECIMAL(15,2) DEFAULT 0.00 NOT NULL,
	creation_date DATE DEFAULT CURRENT_DATE NOT NULL,
	FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);