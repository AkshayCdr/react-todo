import { Todo } from "./todos.model.js";

import db from "../dbConnection.js";
import mongoose from "mongoose";

export async function getData() {
  try {
    const todo = await Todo.find();
    return todo;
  } catch (error) {
    console.log(error.message);
  }
}

export async function setData(data) {
  try {
    await Todo.create(data);
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateData(id, data) {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, data, { new: true });
    if (!updatedTodo) {
      throw new Error(`Todo with id "${id}" not found`);
    }
    return updatedTodo;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteData(id) {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      throw new Error(`Todo with id "${id}" not found`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateTaskCompletion(id, data) {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { $set: { completed: data.completed } },
      { new: true }
    );

    if (!updatedTodo) {
      throw new Error(`Todo with id "${id}" not found`);
    }

    return updatedTodo;
  } catch (error) {
    console.error(error.message);
  }
}
