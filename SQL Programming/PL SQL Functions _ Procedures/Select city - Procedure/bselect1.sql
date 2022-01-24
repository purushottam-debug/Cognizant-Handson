CREATE OR REPLACE PROCEDURE select_city(
    user_id in number,
    city_details  out varchar
)
AS 
BEGIN

    SELECT city INTO city_details FROM contact WHERE  id = (SELECT contact_id from user_details WHERE id=user_id);
        
       if city_details ='Bangalore' then
            city_details :='User is from Bangalore';
        
        elsif city_details ='Chennai' then
            city_details :='User is from Chennai';
        
        else 
            city_details :='User is from other cities';
        end if;
        
END;
/