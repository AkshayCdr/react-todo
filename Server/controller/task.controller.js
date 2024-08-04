import {
  getData,
  setData,
  // updateData,
  // deleteData,
  // updateTaskCompletion,
} from "../model/repository.js";

export async function getTodo(req, res) {
  try {
    const data = await getData();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "server error" });
  }
}

export async function addTodos(req, res) {
  try {
    await setData(req.body);
    res.status(201).json({ message: "successfully created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "server error " });
  }
}

// export async function updateTodos(req, res) {
//   try {
//     const response = await updateData(req.params.id, req.body);
//     res.status(200).json({ message: "succesfully updated", data: response });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: "server error" });
//   }
// }

// export async function deleteTodos(req, res) {
//   try {
//     await deleteData(req.params.id);
//     res.status(204).json({ message: "successfull deleted" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: "server error" });
//   }
// }

// export async function updateCompleteTask(req, res) {
//   try {
//     await updateTaskCompletion(req.params.id, req.body);
//     res.status(200).json({ message: "succesfully updated checkbox" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: "server error" });
//   }
// }
