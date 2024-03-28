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
