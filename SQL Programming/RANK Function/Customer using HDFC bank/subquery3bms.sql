Select distinct us.name , us.address from users us join bookingdetails bok on bok.user_id = us.user_id 
where us.user_id not in (Select user_id from bookingdetails where name='HDFC')
order by us.name;