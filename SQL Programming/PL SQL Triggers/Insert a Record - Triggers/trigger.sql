CREATE TRIGGER INSERT_MSG
AFTER INSERT ON Employee
DECLARE 
    MSG VARCHAR(100);
BEGIN
    MSG := 'NEW EMPLOYEE DETAILS INSERTED';
    DBMS_OUTPUT.PUT_LINE(MSG);
END;
/