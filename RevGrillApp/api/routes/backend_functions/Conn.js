const express = require('express');
const {Pool} = require('pg');
const dotenv = require('dotenv').config();

const app = express();
const port = 4000;

const pool = new Pool({
    user: "csce315331_team_51_master",
    host: "csce-315-db.engr.tamu.edu",
    database: "csce315331_team_51",
    password: "te@m_51",
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
    console.log('test');
});

module.exports = {pool};