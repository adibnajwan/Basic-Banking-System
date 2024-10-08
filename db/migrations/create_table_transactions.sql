CREATE TABLE transactions (
	transaction_id SERIAL PRIMARY KEY,
	transaction_type VARCHAR(10) CHECK (transaction_type IN ('withdraw', 'deposit')) NOT NULL,
	amount DECIMAL(15,2) NOT NULL CHECK (amount > 0),
	transaction_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	account_id INT NOT NULL,
	description VARCHAR(255),
	FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);