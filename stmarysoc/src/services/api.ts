/**
 * API Service for handling data fetching and server communication
 * 
 * A simplified version for basic API interactions
 */

// Basic type definitions 
type EventInfo = {
  id?: string;
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  description: string;
  location?: string;
};

type ServiceInfo = {
  id?: string;
  title: string;
  time: string;
  day: string;
  description: string;
  location?: string;
};

type CommitteeMember = {
  id?: string;
  name: string;
  role: string;
  imageUrl?: string;
  bio?: string;
  contact?: string;
};

type SaintInfo = {
  id?: string;
  name: string;
  feast: string;
  description: string;
  imageUrl?: string;
};

// Contact form submission
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

// Configuration
const API_BASE_URL = '/api';
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

/**
 * Basic async fetch function
 */
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...DEFAULT_HEADERS,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Send a GET request to the API
 */
async function get<T>(endpoint: string): Promise<T> {
  return fetchAPI<T>(endpoint, {
    method: 'GET',
  });
}

/**
 * Send a POST request to the API
 */
async function post<T, D = unknown>(endpoint: string, data: D): Promise<T> {
  return fetchAPI<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Send a PUT request to the API
 */
async function put<T, D = unknown>(endpoint: string, data: D): Promise<T> {
  return fetchAPI<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * Send a DELETE request to the API
 */
async function del<T>(endpoint: string): Promise<T> {
  return fetchAPI<T>(endpoint, {
    method: 'DELETE',
  });
}

// API interface for events
const events = {
  getAll: () => get<EventInfo[]>('/events'),
  getUpcoming: () => get<EventInfo[]>('/events/upcoming'),
  getById: (id: string) => get<EventInfo>(`/events/${id}`),
  create: (event: Omit<EventInfo, 'id'>) => post<EventInfo>('/events', event),
  update: (id: string, event: Partial<EventInfo>) => put<EventInfo>(`/events/${id}`, event),
  delete: (id: string) => del<void>(`/events/${id}`),
};

// API interface for services
const services = {
  getAll: () => get<ServiceInfo[]>('/services'),
  getById: (id: string) => get<ServiceInfo>(`/services/${id}`),
};

// API interface for committee members
const committee = {
  getMembers: () => get<CommitteeMember[]>('/committee'),
  getMemberById: (id: string) => get<CommitteeMember>(`/committee/${id}`),
};

// API interface for saints information
const saints = {
  getAll: () => get<SaintInfo[]>('/saints'),
  getById: (id: string) => get<SaintInfo>(`/saints/${id}`),
};

// Contact form submission
const contact = {
  submit: (formData: ContactFormData) => post<ContactResponse>('/contact', formData),
};

// Newsletter subscription
const newsletter = {
  subscribe: (email: string) => post<{ success: boolean }>('/newsletter/subscribe', { email }),
  unsubscribe: (email: string) => post<{ success: boolean }>('/newsletter/unsubscribe', { email }),
};

// Export the API service
const api = {
  events,
  services,
  committee,
  saints,
  contact,
  newsletter,
};

export default api;