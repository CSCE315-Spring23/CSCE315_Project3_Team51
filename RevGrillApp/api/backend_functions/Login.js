const {pool} = require("./Conn.js");
const Employee = require("./Employee");

exports.isEmployee = Employee.isEmployee;
exports.isManager = Employee.isManager;
exports.employeeInfo = Employee.employeeInfo;
