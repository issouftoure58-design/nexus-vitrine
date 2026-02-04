export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function apiUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const base = API_URL.endsWith("/") ? API_URL.slice(0, -1) : API_URL;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
