import { db } from "../dbConnection.js";
import { todos } from "./schema/todo.js";

// let client = await pool.connect();

// export async function getData() {
//   try {
//     const query = "SELECT * FROM todos ORDER by id ASC";
//     const result = await client.query(query);
//     return result.rows;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

export async function getData() {
  try {
    const result = await db.select().from(todos).orderBy(todos.id);
    return result[0];
  } catch (error) {
    console.error(error.message);
  }
}

// export async function setData(data) {
//   try {
//     const query = `INSERT INTO todos (name) VALUES ($1)`;
//     const values = [data.name];
//     await client.query(query, values);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

export async function setData(data) {
  try {
    // const query = `INSERT INTO todos (name) VALUES ($1)`;
    await db.insert(todos).values({ name: data.name });

    // const values = [data.name];
    // await client.query(query, values);
  } catch (error) {
    console.error(error.message);
  }
}

// export async function updateData(id, data) {
//   try {
//     const dateParameter = data.date || null;
//     const query = ` UPDATE todos SET name = $1, priority = $2, description = $3, date = $4, completed = $5 WHERE id = $6`;
//     const values = [
//       data.name,
//       data.priority,
//       data.description,
//       dateParameter,
//       data.completed,
//       id,
//     ];
//     await client.query(query, values);
//   } catch (error) {
//     console.error("Cannot excecute query", error.message);
//   }
// }

// export async function deleteData(id) {
//   try {
//     const query = ` DELETE FROM todos WHERE id = $1`;
//     await client.query(query, [id]);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// export async function updateTaskCompletion(id, data) {
//   try {
//     const query = `UPDATE todos SET completed = $1 WHERE id = $2`;
//     const values = [data.completed, id];
//     await client.query(query, values);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
