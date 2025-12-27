
export async function apiFetch(url, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(`https://findora-backend-pu0l.onrender.com${url}`, {
    
    ...options,
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {})
    }
  });
  console.log("request processed")
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error("Request Proceeded");
  }

  return data;
}
