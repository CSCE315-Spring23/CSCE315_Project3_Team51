const {pool} = require("./Conn.js");
const Employee = require("./Employee");

Employee.isManager(1);
exports.isEmployee = Employee.isEmployee;
exports.isManager = Employee.isManager;
exports.employeeInfo = Employee.employeeInfo;
