import express from "express";
import taskRouter from "./routes/tasks.js";
import cors from "cors";
import dotenv from "dotenv";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/task", taskRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("listening on port " + PORT));
