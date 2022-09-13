const employee = {
    name:"Sam",
    streetAddress:"11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
        return {...obj, [key]:value,};
  
} 
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key]=value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
        return {...obj,[key]:value,};}

delete employee.name;


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
        
}


