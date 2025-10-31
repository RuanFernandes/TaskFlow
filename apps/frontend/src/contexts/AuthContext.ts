import { createContext } from 'react';
import type { User } from '../types/User';

interface AuthContextData {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: () => boolean;
}

export const AuthContext = createContext({} as AuthContextData);
