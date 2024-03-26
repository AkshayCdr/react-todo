// import { Todo } from "./todos.model.js";
import { createClient } from "redis";

const client = createClient();

(async () => {
  await client.connect();
})();

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
let todos = [
  {
    id: 1,
    name: "first task",
    completed: true,
    date: getCurrentDate(),
    priority: "low",
    description: "wake up ",
  },
  {
    id: 2,
    name: "second task",
    completed: false,
    date: getCurrentDate(),
    priority: "Mid",
    description: "eat ",
  },
];

export async function getData() {
  try {
    // const todo = await Todo.find();
    // return todo;
    await client.get("todo");
    return todos;
  } catch (error) {
    console.log(error.message);
  }
}

export async function setData(data) {
  try {
    // await client.connect();
    await client.set("todo", JSON.stringify(data));
    // todos.push(data);
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateData(id, data) {
  try {
    // const updatedTodo = await Todo.findByIdAndUpdate(id, data, { new: true });
    // if (!updatedTodo) {
    //   throw new Error(`Todo with id "${id}" not found`);
    // }
    // return updatedTodo;
    console.log(id);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteData(id) {
  try {
    // const deletedTodo = await Todo.findByIdAndDelete(id);
    // if (!deletedTodo) {
    //   throw new Error(`Todo with id "${id}" not found`);
    // }
    console.log(id);
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateTaskCompletion(id, data) {
  try {
    // const updatedTodo = await Todo.findByIdAndUpdate(
    //   id,
    //   { $set: { completed: data.completed } },
    //   { new: true }
    // );
    // if (!updatedTodo) {
    //   throw new Error(`Todo with id "${id}" not found`);
    // }
    // return updatedTodo;
    console.log(id, data);
  } catch (error) {
    console.error(error.message);
  }
}
