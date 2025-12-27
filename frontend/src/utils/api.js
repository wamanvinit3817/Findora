const API_BASE =
  process.env.REACT_APP_API_URL || "http://localhost:5000";

export async function apiFetch(url, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {})
    }
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error("Request Proceeded");
  }

  return data;
}
