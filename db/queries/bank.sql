-- Enter data into the customers table --
INSERT INTO customers (customer_name, address, phone_number, email, customer_status, registration_date)
VALUES
    ('Andi Prasetyo', 'Jl. Merdeka No. 1, Jakarta', '081234567890', 'andi.prasetyo@email.com', 'active', CURRENT_DATE),
    ('Budi Santoso', 'Jl. Kebangsaan No. 2, Surabaya', '082345678901', 'budi.santoso@email.com', 'active', CURRENT_DATE),
    ('Cici Rahmawati', 'Jl. Pelangi No. 3, Bandung', '083456789012', 'cici.rahmawati@email.com', 'inactive', CURRENT_DATE);

-- Enter data into the accounts table --
INSERT INTO accounts (account_number, customer_id, account_type, balance, creation_date)
VALUES
    ('ACC123456789', 1, 'savings', 1000000.00, CURRENT_DATE),
    ('ACC987654321', 2, 'current', 2000000.00, CURRENT_DATE),
    ('ACC555555555', 1, 'savings', 500000.00, CURRENT_DATE);

INSERT INTO transactions (transaction_type, amount, transaction_time, account_id, description)
VALUES
    ('deposit', 500000.00, CURRENT_TIMESTAMP, 1, 'Setoran awal'),
    ('withdraw', 200000.00, CURRENT_TIMESTAMP, 1, 'Penarikan ATM'),
    ('deposit', 1500000.00, CURRENT_TIMESTAMP, 2, 'Setoran gaji'),
    ('withdraw', 100000.00, CURRENT_TIMESTAMP, 3, 'Transfer ke tabungan');

-- Update address column in customers table --
UPDATE customers
SET address = 'Jl. Condong Catur No. 2, Yogyakarta'
WHERE customer_name = 'Budi Santoso';

-- Check for updates --
SELECT * FROM customers
WHERE customer_name = 'Budi Santoso';

-- Displaying transactions with account id 1 --
SELECT transaction_id, transaction_type, amount 
FROM transactions
WHERE account_id = 1;

-- Counting the number of transactions made by each type of account --
SELECT a. account_type, COUNT(t.transaction_id) AS transaction_count
FROM accounts a
LEFT JOIN transactions t ON a.account_id = t.account_id
GROUP BY a.account_type;

-- Update balance account --
UPDATE accounts
SET balance = balance * 0.80
WHERE account_id = 1;

-- Delete account where account id 4 --
INSERT INTO accounts (account_number, customer_id, account_type, balance, creation_date)
VALUES ('ACC182766249', 2, 'savings', 3000000.00, CURRENT_DATE);

-- Delete column --
DELETE FROM accounts
WHERE account_id = 4

-- Check for updates --
SELECT * FROM accounts;

-- Displaying total balance --
SELECT c.customer_name, SUM(a.balance) AS total_balance
FROM customers c
JOIN accounts a ON a.customer_id = c.customer_id
GROUP BY c.customer_id;