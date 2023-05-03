const {pool} = require("./Conn.js");


async function isEmployee(id) {
    try {
        console.log('Checking if id ' + id + ' is an employee');
        const res = await pool.query(
            "SELECT employee_name FROM employees WHERE employee_id = $1",
            [id]
        );
        if(res.rowCount > 0) {
            console.log('Employee found: ' + res.rows[0].employee_name);
            return res.rows[0];
        } else {
            console.error('Employee not found');
            return -1;
        }
    } catch (error) {
        console.error(error);
    }
}

async function isManager(id) {
    try {
        console.log('Checking if id ' + id + ' is a manager');
        const res = await pool.query(
            "SELECT is_manager, employee_name FROM employees WHERE employee_id = $1",
            [id]
        );
        if(res.rowCount == 0) {
            console.error('Employee not found');
            return -1;
        } else if(res.rows[0].is_manager) {
            console.log('Manager found: ' + res.rows[0].employee_name);
            console.log(res.rows[0]);
            return res.rows[0];
        } else {
            console.error('Non-manager found: ' + res.rows[0].employee_name);
            console.log(res.rows[0]);
            return res.rows[0];
        }
    } catch (error) {
        console.error(error);
    }
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

// isEmployee(2);

exports.isEmployee = isEmployee;
exports.isManager = isManager;
exports.employeeInfo = employeeInfo;