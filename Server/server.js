import express from "express";
import taskRouter from "./routes/tasks.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/task", taskRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("listening on port " + PORT));
