const API_KEY = import.meta.env.VITE_API_KEY;

export async function udpateCall(id, data) {
  return fetch(`${API_KEY}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function deleteCall(id) {
  return fetch(`${API_KEY}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}

export async function addCall(taskname) {
  return fetch(`${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: taskname,
      completed: false,
    }),
  });
}

export async function getCall() {
  return fetch(`${API_KEY}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
}

export async function setCompleteCall(id, completed) {
  return fetch(`${API_KEY}/done/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: completed,
    }),
  });
}
