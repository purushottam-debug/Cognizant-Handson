Select Student.student_name , Department.department_name from Department  inner 
join Student on Department.department_id = Student.department_id where 
Student.city = "Coimbatore" order by Student.student_name;