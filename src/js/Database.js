const {pool} = require("./Conn.js");

async function employeeInfo(id) {
    try {
        console.log('Getting data of employee with id ' + id);
        const res = await pool.query(
            "SELECT * FROM employees WHERE employee_id = $1",
            [id]
        );
        console.log(res.rows);
        return res.rows;
    } catch (error) {
        console.error(error)
    }
}

employeeInfo(1);