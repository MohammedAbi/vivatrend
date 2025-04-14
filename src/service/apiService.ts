import { API_CONFIG } from "./config";

// Shared Types
interface ApiErrorResponse {
  errors: Array<{ message: string }>;
  status: string;
  statusCode: number;
}

interface AuthResponse {
  accessToken: string;
  user: {
    name: string;
    email: string;
    venueManager?: boolean;
  };
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  venueManager?: boolean;
}

// Core API Request Function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  const headers = {
    ...API_CONFIG.DEFAULT_HEADERS,
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      let errorMessage = `Request failed with status ${response.status}`;
      try {
        const errorData: ApiErrorResponse = await response.json();
        errorMessage =
          errorData.errors?.[0]?.message || errorData.status || errorMessage;
      } catch (e) {
        console.error(`Failed to parse error response for ${url}`, e);
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error(`API request to ${url} failed:`, {
      error: errorMessage,
      endpoint,
      options,
    });
    throw new Error(`API request failed: ${errorMessage}`);
  }
}

// Auth Service Methods
export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await apiRequest<{ data: AuthResponse }>(
      API_CONFIG.ENDPOINTS.AUTH.LOGIN,
      {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
        },
      }
    );
    return response.data;
  },

  async register(userData: RegisterData): Promise<AuthResponse> {
    if (!userData.email.endsWith("@stud.noroff.no")) {
      throw new Error("Email must be a @stud.noroff.no address");
    }

    if (userData.password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    const response = await apiRequest<{ data: AuthResponse }>(
      API_CONFIG.ENDPOINTS.AUTH.REGISTER,
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
        },
      }
    );
    return response.data;
  },
};

// Export the core apiRequest if needed elsewhere
export { apiRequest };
