// Write your solution in this file!

const employee = {
    name : "Robert",
    streetAddress: "2704 Eagle Cliff Dr",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee.name="Sam";
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function destructivelyDeleteFromEmployeeByKey (employee,key) {
    delete employee.name;

    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee={...employee};
    delete newEmployee.name;
    return newEmployee;
}