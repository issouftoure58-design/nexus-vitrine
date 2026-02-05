// API Configuration for NEXUS Vitrine
// Points to nexus-core backend

const API_BASE = import.meta.env.VITE_API_URL || 'https://nexus-core-v722.onrender.com';

export async function apiCall(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE}${endpoint}`;

  // Add auth token if available
  const token = localStorage.getItem('admin_token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  return response;
}

export { API_BASE };
