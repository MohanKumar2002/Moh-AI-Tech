'use client';

import type { User, UserRole } from '@/types';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usersStore } from '@/lib/data-store'; // For mock user data

interface AuthContextType {
  user: User | null;
  login: (email: string, password_unused: string) => Promise<{ success: boolean; message?: string }>;
  register: (name: string, email: string, password_unused: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mocked JWT token storage
const MOCK_TOKEN_KEY = 'mohai_mock_auth_token';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for a mock token on initial load
    const token = localStorage.getItem(MOCK_TOKEN_KEY);
    if (token) {
      // In a real JWT scenario, you'd validate the token and fetch user data
      // For mock, assume token is the user's email
      const storedUser = Array.from(usersStore.values()).find(u => u.email === token);
      if (storedUser) {
        setUser({ id: storedUser.id, email: storedUser.email, role: storedUser.role, name: storedUser.name });
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password_unused: string): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const storedUser = usersStore.get(email);

    if (storedUser) { // In real app, also check password hash
      const currentUser: User = { id: storedUser.id, email: storedUser.email, role: storedUser.role, name: storedUser.name };
      setUser(currentUser);
      localStorage.setItem(MOCK_TOKEN_KEY, email); // Store email as mock token
      setIsLoading(false);
      return { success: true };
    }
    setIsLoading(false);
    return { success: false, message: 'Invalid credentials' };
  };

  const register = async (name: string, email: string, _password_unused: string): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    if (usersStore.has(email)) {
      setIsLoading(false);
      return { success: false, message: 'User already exists' };
    }
    // In a real app, hash the password
    const newUserEntry = { id: `user_${Date.now()}`, email, passwordHash: 'hashed_new_password', role: 'user' as UserRole, name };
    usersStore.set(email, newUserEntry);
    
    const currentUser: User = { id: newUserEntry.id, email: newUserEntry.email, role: newUserEntry.role, name: newUserEntry.name };
    setUser(currentUser);
    localStorage.setItem(MOCK_TOKEN_KEY, email); // Store email as mock token
    setIsLoading(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(MOCK_TOKEN_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
