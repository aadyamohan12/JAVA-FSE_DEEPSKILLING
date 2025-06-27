-- Sample ACCOUNTS table
CREATE TABLE ACCOUNTS (
  AccountID   NUMBER PRIMARY KEY,
  AccountType VARCHAR2(20),
  Balance     NUMBER
);

-- Sample EMPLOYEES table
CREATE TABLE EMPLOYEES (
  EmployeeID    NUMBER PRIMARY KEY,
  DepartmentID  NUMBER,
  Salary        NUMBER
);

-- Insert test data
INSERT INTO ACCOUNTS VALUES (1001, 'SAVINGS', 1000);
INSERT INTO ACCOUNTS VALUES (1002, 'SAVINGS', 2000);
INSERT INTO ACCOUNTS VALUES (1003, 'CURRENT', 1500);

INSERT INTO EMPLOYEES VALUES (1, 101, 5000);
INSERT INTO EMPLOYEES VALUES (2, 101, 6000);
INSERT INTO EMPLOYEES VALUES (3, 102, 7000);

COMMIT;
-- Enable output
SET SERVEROUTPUT ON;

-- Procedure 1: Apply 1% Interest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE ACCOUNTS
  SET Balance = Balance + (Balance * 0.01)
  WHERE AccountType = 'SAVINGS';

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/

-- Procedure 2: Apply Bonus to Employees
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_id IN NUMBER,
  bonus_pct IN NUMBER
) IS
BEGIN
  UPDATE EMPLOYEES
  SET Salary = Salary + (Salary * (bonus_pct / 100))
  WHERE DepartmentID = dept_id;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Bonus applied to employees in department ' || dept_id);
END;
/

-- Procedure 3: Transfer Funds Between Accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
  from_acc_id IN NUMBER,
  to_acc_id   IN NUMBER,
  amount      IN NUMBER
) IS
  v_balance NUMBER;
BEGIN
  SELECT Balance INTO v_balance
  FROM ACCOUNTS
  WHERE AccountID = from_acc_id
  FOR UPDATE;

  IF v_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
  END IF;

  UPDATE ACCOUNTS
  SET Balance = Balance - amount
  WHERE AccountID = from_acc_id;

  UPDATE ACCOUNTS
  SET Balance = Balance + amount
  WHERE AccountID = to_acc_id;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Transfer of $' || amount || ' from Account ' || from_acc_id || ' to Account ' || to_acc_id || ' completed.');
END;
/
-- Enable output again if needed
SET SERVEROUTPUT ON;

-- Call 1: Interest
EXEC ProcessMonthlyInterest;

-- Call 2: Bonus
EXEC UpdateEmployeeBonus(101, 10);

-- Call 3: Transfer
EXEC TransferFunds(1001, 1002, 500);