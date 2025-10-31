import {
    useEffect,
    useState,
    useCallback,
    useRef,
    type ReactNode,
} from 'react';
import type { User } from '../types/User';
import { api, setAuthToken } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const hasRevalidatedRef = useRef(false);

    const isAuthenticated = useCallback(() => {
        return user !== null;
    }, [user]);

    const login = async (email: string, password: string) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            const { access_token, user } = response.data;
            setAuthToken(access_token);
            setUser(user);
        } catch (error) {
            const errorData = (
                error as Record<string, Record<string, unknown> | undefined>
            ).response?.data as
                | {
                      message?: string;
                      error?: string;
                      statusCode?: number;
                  }
                | undefined;

            throw (
                errorData || {
                    message: 'Erro ao fazer login',
                    error: 'Unknown Error',
                    statusCode: 500,
                }
            );
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            const response = await api.post('/auth/register', {
                name,
                email,
                password,
            });
            const { access_token, user } = response.data;
            setAuthToken(access_token);
            setUser(user);
        } catch (error) {
            const errorData = (
                error as Record<string, Record<string, unknown> | undefined>
            ).response?.data as
                | {
                      message?: string;
                      error?: string;
                      statusCode?: number;
                  }
                | undefined;

            throw (
                errorData || {
                    message: 'Erro ao registrar',
                    error: 'Unknown Error',
                    statusCode: 500,
                }
            );
        }
    };

    const logout = () => {
        setAuthToken(null);
        setUser(null);
    };

    useEffect(() => {
        if (!hasRevalidatedRef.current) {
            hasRevalidatedRef.current = true;
            const revalidateSession = async () => {
                try {
                    const { access_token, user } = await api
                        .get('/auth/me')
                        .then((res) => res.data);
                    setAuthToken(access_token);
                    setUser(user);
                } catch (error) {
                    console.error('Error revalidating session:', error);
                    setAuthToken(null);
                    setUser(null);
                }
            };

            revalidateSession();
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated, login, logout, register }}
        >
            {children}
        </AuthContext.Provider>
    );
}
