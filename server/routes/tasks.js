import express from "express";
import {
  getTodo,
  addTodos,
  updateTodos,
  deleteTodos,
  updateCompleteTask,
} from "../controller/task.controller.js";

const router = express.Router();

router.get("/", getTodo);

router.post("/", addTodos);

router.put("/:id", updateTodos);

router.put("/done/:id", updateCompleteTask);

router.delete("/:id", deleteTodos);

export default router;
