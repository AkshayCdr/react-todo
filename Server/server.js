import express from "express";
import taskRouter from "./routes/tasks.js";
import dotenv from "dotenv";
import helmet from "helmet";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

app.use("/task", taskRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("listening on port " + PORT));
