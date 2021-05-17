// Write your solution in this file!

const employee = {name: 'Sam', address: '295 Bainbridge street'}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
     newEmployee[key] = value
        return newEmployee;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

 function  deleteFromEmployeeByKey(employee, key) {
      let employee2 = Object.assign({}, employee);
        delete employee2[key]
         return employee2 
 }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

