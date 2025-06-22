import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import type { User, Role } from "../types";

type Tokens = { access: string; refresh: string; };
type AuthState = { user: User | null; tokens: Tokens | null; };

interface AuthContextProps extends AuthState {
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasRole: (role: Role) => boolean;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [tokens, setTokens] = useState<Tokens | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const rawTokens = localStorage.getItem("tokens");
    const rawUser = localStorage.getItem("user");
    if (rawTokens && rawUser) {
      setTokens(JSON.parse(rawTokens));
      setUser(JSON.parse(rawUser));
    }
  }, []);

  // Fake login cho demo nhanh
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Có thể thay bằng gọi API thật
      if (email === "admin@demo.com" && password === "123456") {
        const userInfo: User = {
          id: "1", name: "Admin Demo", email, roles: ["admin"], avatar: ""
        };
        setTokens({ access: "fake-access", refresh: "fake-refresh" });
        setUser(userInfo);
        localStorage.setItem("tokens", JSON.stringify({ access: "fake-access", refresh: "fake-refresh" }));
        localStorage.setItem("user", JSON.stringify(userInfo));
      } else {
        throw new Error("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const refreshToken = async () => { /*...*/ };

  const logout = () => {
    setUser(null);
    setTokens(null);
    localStorage.removeItem("tokens");
    localStorage.removeItem("user");
  };

  const hasRole = (role: Role) => !!user?.roles?.includes(role);

  return (
    <AuthContext.Provider value={{ user, tokens, loading, login, logout, hasRole, refreshToken: async () => {} }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
