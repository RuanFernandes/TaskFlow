import { useState } from 'react';
import { Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import {
    LoginForm,
    RegisterForm,
    LoginContainer,
    LoginHeader,
} from './components';

type AuthMode = 'login' | 'register';

interface LoginFormData {
    email: string;
    password: string;
}

interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();
    const { login, register } = useAuth();
    const [mode, setMode] = useState<AuthMode>('login');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleLoginSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            await login(data.email, data.password);
            navigate('/dashboard');
        } catch (error) {
            const errorData = error as {
                message?: string;
                error?: string;
                statusCode?: number;
            };
            setErrorMessage(
                errorData.message || 'Erro ao fazer login. Tente novamente.',
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegisterSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            await register(data.name, data.email, data.password);
            navigate('/dashboard');
        } catch (error) {
            const errorData = error as {
                message?: string;
                error?: string;
                statusCode?: number;
            };
            setErrorMessage(
                errorData.message || 'Erro ao registrar. Tente novamente.',
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegisterClick = () => {
        setErrorMessage(null);
        setMode('register');
    };

    const handleBackClick = () => {
        setErrorMessage(null);
        setMode('login');
    };

    return (
        <LoginContainer>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                }}
            >
                <LoginHeader />

                {errorMessage && (
                    <Alert
                        severity="error"
                        sx={{
                            backgroundColor: 'rgba(244, 67, 54, 0.1)',
                            borderColor: '#f44336',
                            color: '#f44336',
                            '& .MuiAlert-icon': {
                                color: '#f44336',
                            },
                        }}
                    >
                        {errorMessage}
                    </Alert>
                )}

                {mode === 'login' ? (
                    <LoginForm
                        onSubmit={handleLoginSubmit}
                        onRegisterClick={handleRegisterClick}
                        isLoading={isLoading}
                    />
                ) : (
                    <RegisterForm
                        onSubmit={handleRegisterSubmit}
                        onBackClick={handleBackClick}
                        isLoading={isLoading}
                    />
                )}
            </Box>
        </LoginContainer>
    );
};

export default Login;
