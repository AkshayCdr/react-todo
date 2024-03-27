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

export async function getData() {
  try {
    console.log("getting data");
    const data = await client.get("todo");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.log(error.message);
  }
}

export async function setData(data) {
  try {
    // await client.connect();
    console.log("setting data ");
    await client.set("todo", JSON.stringify(data), (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Data stored successfully:", res);
      }
    });
    console.log(data);
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
