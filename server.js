const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "user",
  host: "database",
  database: "mydatabase",
  password: "password",
  port: 5432,
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});

app.get("/hello", async (req, res)=>{
  res.send("Hello World desde DOcker! papa loquesea");
})

app.listen(5000, () => {
  console.log("Backend corriendo en puerto 5000");
});


