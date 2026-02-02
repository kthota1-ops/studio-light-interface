import { useState, useEffect, createContext, useContext, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  resetPassword: (email: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user storage key
const USERS_STORAGE_KEY = "pixelcut-users";
const CURRENT_USER_KEY = "pixelcut-current-user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const getUsers = (): Record<string, { password: string; name: string }> => {
    try {
      return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const users = getUsers();
    const userData = users[email.toLowerCase()];

    if (!userData) {
      return { success: false, error: "No account found with this email" };
    }

    if (userData.password !== password) {
      return { success: false, error: "Incorrect password" };
    }

    const loggedInUser: User = {
      id: email.toLowerCase().replace(/[^a-z0-9]/g, ""),
      email: email.toLowerCase(),
      name: userData.name,
    };

    setUser(loggedInUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));
    return { success: true };
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const users = getUsers();
    const normalizedEmail = email.toLowerCase();

    if (users[normalizedEmail]) {
      return { success: false, error: "An account with this email already exists" };
    }

    if (password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters" };
    }

    users[normalizedEmail] = { password, name };
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

    const newUser: User = {
      id: normalizedEmail.replace(/[^a-z0-9]/g, ""),
      email: normalizedEmail,
      name,
    };

    setUser(newUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  const resetPassword = async (email: string, newPassword: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const users = getUsers();
    const normalizedEmail = email.toLowerCase();

    if (!users[normalizedEmail]) {
      return { success: false, error: "No account found with this email" };
    }

    if (newPassword.length < 6) {
      return { success: false, error: "Password must be at least 6 characters" };
    }

    // Update password
    users[normalizedEmail].password = newPassword;
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

    return { success: true };
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, signup, logout, resetPassword }}>
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
