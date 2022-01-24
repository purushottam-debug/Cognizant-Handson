
class Employee 
{
    constructor(name, designation, year_of_experience)
    {
        this.designation = designation;
        this.name = name;
        this.year_of_experience = year_of_experience;
    }
    
}
function displayEmployee(name, designation, year_of_experience)
{
    let emp=createEmployee(name, designation, year_of_experience);
    if(validateObject(emp))
    {
        let year = parseInt(new Date().getFullYear())-2;
        var str=name+" is serving the position of "+designation+" since "+(year - year_of_experience);
        return str;
    }
    esle
    {
        return "not valid";
    }
}
function createEmployee(name, designation, year_of_experience)
{
    let emp = new Employee(name, designation, year_of_experience);
    return emp;
    
}

function validateObject(employee)
{
return employee instanceof Employee;
}