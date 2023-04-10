const express = require('express');
const {Pool} = require('pg');
const dotenv = require('dotenv').config();

const app = express();
const port = 3000;

const pool = new Pool({
    user: credentials.env.PSQL_USER,
    database: credentials.env.PSQL_DATABASE,
    password: "te@m_51",
    port: 5432,
    host: credentials.env.PSQL_HOST
});

module.exports = {pool};