export async function udpateCall(id, data) {
  const response = await fetch(`http://localhost:3000/task/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
}

export async function deleteCall(id) {
  const response = await fetch(`http://localhost:3000/task/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

export async function addCall(taskname) {
  const response = await fetch(`http://localhost:3000/task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: taskname,
      completed: false,
    }),
  });
  return response;
}

export async function getCall() {
  const response = await fetch(`http://localhost:3000/task`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

export async function setCompleteCall(id, completed) {
  const response = await fetch(`http://localhost:3000/task/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: completed,
    }),
  });
  return response;
}
