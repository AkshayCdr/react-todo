import { defineConfig } from "drizzle-kit";

import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  dialect: "postgresql",
  schema: "./model/schema/todo.js",
  out: "./drizzle",
  dbCredentials: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
