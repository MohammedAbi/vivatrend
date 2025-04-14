// context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../service/apiService";

interface AuthContextType {
  user: {
    name: string;
    email: string;
    venueManager?: boolean;
  } | null;
  token: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (userData: {
    name: string;
    email: string;
    password: string;
    bio?: string;
    avatar?: { url: string; alt: string };
    banner?: { url: string; alt: string };
    venueManager?: boolean;
  }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAuthSuccess = (data: {
    accessToken: string;
    user: { name: string; email: string; venueManager?: boolean };
  }) => {
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data));
    setToken(data.accessToken);
    setUser(data);
    setError(null);
  };

  const login = async (credentials: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const data = await authService.login(credentials);
      handleAuthSuccess(data);
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
      const data = await authService.register(userData);
      handleAuthSuccess(data);
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
        clearError, // Add this to the provider value
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
