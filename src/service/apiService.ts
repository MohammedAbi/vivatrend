// // services/apiService.ts
// import { API_CONFIG } from "./config";

// export async function apiRequest<T>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<T> {
//   const url = `${API_CONFIG.BASE_URL}${endpoint}`;
//   const headers = {
//     ...API_CONFIG.DEFAULT_HEADERS,
//     ...options.headers,
//   };

//   try {
//     const response = await fetch(url, {
//       ...options,
//       headers,
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(
//         errorData.message || `Request failed with status ${response.status}`
//       );
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("API request failed:", error.message);
//     throw error;
//   }
// }
// services/apiService.ts
import { API_CONFIG } from "./config";

interface ApiErrorResponse {
  errors: Array<{ message: string }>;
  status: string;
  statusCode: number;
}

export async function apiRequest<T>(
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
        // Get the first error message or use the status as fallback
        errorMessage = errorData.errors?.[0]?.message || errorData.status || errorMessage;
      } catch (e) {
        console.error(`Failed to parse error response for ${url}`, e);
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error(`API request to ${url} failed:`, {
      error: errorMessage,
      endpoint,
      options,
    });
    
    // Re-throw with more context
    throw new Error(`API request failed: ${errorMessage}`);
  }
}