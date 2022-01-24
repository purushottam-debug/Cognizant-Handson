DECLARE 
          d_loc  Department.Location_id%type := 'HQ-BLR-101'; 
    
BEGIN
        Update Department Set Location_id = d_loc Where Location_id Like 'HQ%';

END;

/