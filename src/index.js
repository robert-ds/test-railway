import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";

/**
 * Create an express server
 */
const app = express();

/**
 * Create a GET route
 */
app.get("/", async (req, res) => {
  const [result] = await pool.query(`SELECT * FROM users`);
  res.json(result);
});

/**
 * Create a GET route and send a response with "Hello World"
 */
app.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "Hello World" as Result`);
  res.json(result[0]);
});

/**
 * Create a GET route and Insert values on table users"
 */
app.get("/create", async (req, res) => {
  const result = await pool.query(`INSERT INTO users (name) VALUES ("Melisa")`);
  res.json(result);
});

/**
 * Seleting port of app
 */
app.listen(PORT);
console.log("Server on Port ", PORT);
