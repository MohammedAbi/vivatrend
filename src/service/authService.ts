// // services/authService.ts
// import { API_CONFIG } from "../service/config";
// import { apiRequest } from "./apiService";

// interface AuthResponse {
//   accessToken: string;
//   user: {
//     name: string;
//     email: string;
//     venueManager?: boolean;
//   };
// }

// interface LoginCredentials {
//   email: string;
//   password: string;
// }

// interface RegisterData {
//   name: string;
//   email: string;
//   password: string;
//   venueManager?: boolean;
// }

// export const authService = {
//   async login(credentials: LoginCredentials): Promise<AuthResponse> {
//     const response = await apiRequest<{ data: AuthResponse }>(
//       API_CONFIG.ENDPOINTS.AUTH.LOGIN,
//       {
//         method: "POST",
//         body: JSON.stringify(credentials),
//         headers: {
//           "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
//         },
//       }
//     );

//     if (!response.data) {
//       throw new Error("Invalid response format");
//     }

//     return response.data;
//   },

//   async register(userData: RegisterData): Promise<AuthResponse> {
//     const response = await apiRequest<{ data: AuthResponse }>(
//       API_CONFIG.ENDPOINTS.AUTH.REGISTER,
//       {
//         method: "POST",
//         body: JSON.stringify(userData),
//         headers: {
//           "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
//         },
//       }
//     );

//     if (!response.data) {
//       throw new Error("Invalid response format");
//     }
//     console.log(response.data);
//     return response.data;
//   },
// };
import { API_CONFIG } from "../service/config";
import { apiRequest } from "./apiService";

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
    // Validate email domain
    if (!userData.email.endsWith("@stud.noroff.no")) {
      throw new Error("Email must be a @stud.noroff.no address");
    }

    // Validate password length
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
    console.log(response.data);
    return response.data;
  },
};
