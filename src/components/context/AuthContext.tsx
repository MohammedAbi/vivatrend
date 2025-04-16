import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../service/apiService";

interface UserProfile {
  name: string;
  email: string;
  bio?: string;
  avatar?: {
    url: string;
    alt: string;
  };
  banner?: {
    url: string;
    alt: string;
  };
  venueManager?: boolean;
}

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (userData: {
    name: string;
    email: string;
    password: string;
    bio?: string;
    avatar?: { url: string; alt: string };
    banner?: { url: string; alt: string };
    venueManager: boolean;
  }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser && storedUser !== "undefined"
        ? JSON.parse(storedUser)
        : null;
    } catch (error) {
      console.error("Failed to parse user data:", error);
      localStorage.removeItem("user");
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken && storedToken !== "undefined" ? storedToken : null;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAuthSuccess = (response: {
    data?: {
      accessToken: string;
      name: string;
      email: string;
      avatar?: { url: string; alt: string };
      banner?: { url: string; alt: string };
      venueManager?: boolean;
    };
    accessToken?: string;
    name?: string;
    email?: string;
    avatar?: { url: string; alt: string };
    banner?: { url: string; alt: string };
    venueManager?: boolean;
  }) => {
    // Handle both response.data and direct response structures
    const responseData = response.data || response;

    if (!responseData.accessToken) {
      throw new Error("Authentication response missing access token");
    }

    if (!responseData.name || !responseData.email) {
      throw new Error("Authentication response missing required user data");
    }

    const { accessToken, ...userData } = responseData;

    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setToken(accessToken);
    setUser({
      name: responseData.name,
      email: responseData.email,
      avatar: responseData.avatar,
      banner: responseData.banner,
      venueManager: responseData.venueManager,
    });
    setError(null);
  };

  const login = async (credentials: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const response = await authService.login(credentials);
      handleAuthSuccess(response);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await authService.register({
        ...userData,
        venueManager: false,
      });
      handleAuthSuccess(response);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        isLoading,
        error,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
