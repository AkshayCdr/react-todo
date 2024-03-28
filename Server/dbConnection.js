import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "akshay",
  host: "localhost",
  database: "Todo",
  password: "password",
  port: 5432,
});
