CREATE PROCEDURE insert_credit
(
    credit_id IN  Number,
    credit_card_number in Varchar,
    credit_card_expire IN Varchar,
    holder_name IN Varchar,
    card_type IN Varchar
  ) 
    AS
BEGIN 
    INSERT INTO credit_card VALUES(credit_id,credit_card_number,credit_card_expire,holder_name,card_type);
    COMMIT;

END;
/