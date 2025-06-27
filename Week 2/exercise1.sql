-- Create CUSTOMERS table
CREATE TABLE CUSTOMERS (
  CustomerID       NUMBER PRIMARY KEY,
  CustomerName     VARCHAR2(100),
  Age              NUMBER,
  Balance          NUMBER,
  LoanInterestRate NUMBER,
  IsVIP            CHAR(1)
);

-- Create LOANS table
CREATE TABLE LOANS (
  LoanID     NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  DueDate    DATE,
  FOREIGN KEY (CustomerID) REFERENCES CUSTOMERS(CustomerID)
);

-- Insert sample data
INSERT INTO CUSTOMERS VALUES (1, 'Alice', 65, 12000, 8.5, 'N');
INSERT INTO CUSTOMERS VALUES (2, 'Bob', 45, 9000, 9.0, 'N');
INSERT INTO CUSTOMERS VALUES (3, 'Carol', 70, 11000, 7.5, 'N');

INSERT INTO LOANS VALUES (101, 1, SYSDATE + 10); -- Due soon
INSERT INTO LOANS VALUES (102, 2, SYSDATE + 40); -- Not due soon
INSERT INTO LOANS VALUES (103, 3, SYSDATE + 5);  -- Due soon

COMMIT;
BEGIN
  FOR cust IN (SELECT CustomerID, Age, LoanInterestRate FROM CUSTOMERS) LOOP
    IF cust.Age > 60 THEN
      UPDATE CUSTOMERS
      SET LoanInterestRate = LoanInterestRate - 1
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Interest rate discount applied to customers over 60.');
END;
/
BEGIN
  FOR cust IN (SELECT CustomerID, Balance FROM CUSTOMERS) LOOP
    IF cust.Balance > 10000 THEN
      UPDATE CUSTOMERS
      SET IsVIP = 'Y'
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('VIP status updated for high balance customers.');
END;
/
DECLARE
  v_customer_name VARCHAR2(100);
BEGIN
  FOR loan_rec IN (
    SELECT LoanID, CustomerID, DueDate
    FROM LOANS
    WHERE DueDate <= SYSDATE + 30
  ) LOOP
    BEGIN
      SELECT CustomerName INTO v_customer_name
      FROM CUSTOMERS
      WHERE CustomerID = loan_rec.CustomerID;

      DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || loan_rec.LoanID ||
                           ' for customer ' || v_customer_name ||
                           ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY'));
    EXCEPTION
      WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Customer not found for Loan ID ' || loan_rec.LoanID);
    END;
  END LOOP;
END;
/