import { eq } from "drizzle-orm";
import { db } from "../dbConnection.js";
import { todos } from "./schema/todo.js";

export async function getData() {
  try {
    const result = await db.select().from(todos).orderBy(todos.id);
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error("Error deleting data");
  }
}

export async function setData(data) {
  try {
    await db.insert(todos).values({ name: data.name });
  } catch (error) {
    console.error(error.message);
    throw new Error("error inserting data");
  }
}

export async function updateData(id, data) {
  try {
    const dateParameter = data.date || null;
    await db
      .update(todos)
      .set({
        name: data.name,
        priority: data.priority,
        description: data.description,
        date: dateParameter,
        completed: data.completed,
      })
      .where(eq(todos.id, id));
  } catch (error) {
    console.error("Cannot excecute query", error.message);
    throw new Error("Error updating data");
  }
}

export async function deleteData(id) {
  try {
    await db.delete(todos).where(eq(todos.id, id));
  } catch (error) {
    console.error(error.message);
    throw new Error("Cannot delete data");
  }
}

// export async function updateTaskCompletion(id, data) {
//   try {
//     const query = `UPDATE todos SET completed = $1 WHERE id = $2`;
//     const values = [data.completed, id];
//     await client.query(query, values);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

export async function updateTaskCompletion(id, data) {
  try {
    await db
      .update(todos)
      .set({ completed: data.completed })
      .where(eq(todos.id, id));
  } catch (error) {
    console.log(error.message);
    throw new Error("task completion eroor ");
  }
}
