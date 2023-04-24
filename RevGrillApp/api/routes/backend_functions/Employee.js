const {pool} = require("./Conn.js");


async function isEmployee(id) {
    console.log("Work in progress");
}

async function isManager(id) {
    console.log("Work in progress");
}

async function employeeInfo(id) {
    try {
        console.log('Getting data of employee with id ' + id);
        const res = await pool.query(
            "SELECT * FROM employees WHERE employee_id = $1",
            [id]
        );
        console.log(res.rows[0]);
        return res.rows[0];
    } catch (error) {
        console.error(error)
    }
}

exports.isEmployee = isEmployee;
exports.isManager = isManager;
exports.employeeInfo = employeeInfo;