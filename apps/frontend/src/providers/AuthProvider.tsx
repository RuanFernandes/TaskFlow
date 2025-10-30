import { useEffect, useState, type ReactNode } from 'react';
import type { User } from '../types/User';
import { api, setAuthToken } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const isAuthenticated = () => {
        return user !== null;
    };

    const login = async (email: string, password: string) => {
        const response = await api.post('/auth/login', { email, password });
        const { access_token, user } = response.data;
        setAuthToken(access_token);
        setUser(user);
    };

    const logout = () => {
        setAuthToken(null);
        setUser(null);
    };

    useEffect(() => {
        const revalidateSession = async () => {
            try {
                const { access_token, user } = await api
                    .get('/auth/me')
                    .then((res) => res.data);
                setAuthToken(access_token);
                setUser(user);
            } catch (error) {
                console.error('Error revalidating session:', error);
            }
        };

        revalidateSession();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
