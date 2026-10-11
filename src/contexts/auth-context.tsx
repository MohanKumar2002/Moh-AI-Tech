'use client';

import React, { createContext, useContext } from 'react';
import { signOut } from 'next-auth/react';

interface AuthContextType {
  user: any;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: async () => {
    await signOut({ callbackUrl: '/documind/login' });
  },
  isLoading: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const logout = async () => {
    try {
      await signOut({ callbackUrl: '/documind/login' });
    } catch {
      window.location.href = '/documind/login';
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: null,
        logout,
        isLoading: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
