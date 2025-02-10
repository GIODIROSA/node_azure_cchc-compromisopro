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

app.get("/port", (req, res) =>{
  res.send(`<h1>Backend corriendo en puerto ${PORT}</h1>`)
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en puerto ${PORT}`);
});


