import { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface LoginFormProps {
    onSubmit: (data: { email: string; password: string }) => void;
    onRegisterClick: () => void;
    isLoading?: boolean;
}

export const LoginForm = ({
    onSubmit,
    onRegisterClick,
    isLoading = false,
}: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>(
        {},
    );

    const validateForm = (): boolean => {
        const newErrors: { email?: string; password?: string } = {};

        if (!email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Email inválido';
        }

        if (!password.trim()) {
            newErrors.password = 'Senha é obrigatória';
        } else if (password.length < 6) {
            newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit({ email, password });
        }
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                animation: 'fadeInUp 0.8s ease-in-out',
                '@keyframes fadeInUp': {
                    from: {
                        opacity: 0,
                        transform: 'translateY(30px)',
                    },
                    to: {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
            }}
        >
            <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email)
                        setErrors({ ...errors, email: undefined });
                }}
                error={!!errors.email}
                helperText={errors.email}
                disabled={isLoading}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        color: '#ffffff',
                        '& fieldset': {
                            borderColor: '#6366f1',
                        },
                        '&:hover fieldset': {
                            borderColor: '#818cf8',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#818cf8',
                        },
                    },
                    '& .MuiInputBase-input': {
                        '&:-webkit-autofill': {
                            WebkitBoxShadow:
                                '0 0 0 1000px #0f1535 inset !important',
                            WebkitTextFillColor: '#ffffff !important',
                        },
                        '&:-webkit-autofill:focus': {
                            WebkitBoxShadow:
                                '0 0 0 1000px #0f1535 inset !important',
                            WebkitTextFillColor: '#ffffff !important',
                        },
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#a0a0a0',
                        opacity: 1,
                    },
                    '& .MuiInputLabel-root': {
                        color: '#a0a0a0',
                    },
                }}
            />

            <TextField
                fullWidth
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password)
                        setErrors({ ...errors, password: undefined });
                }}
                error={!!errors.password}
                helperText={errors.password}
                disabled={isLoading}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                                disabled={isLoading}
                                sx={{
                                    color: '#6366f1',
                                    '&:hover': {
                                        color: '#818cf8',
                                    },
                                }}
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        color: '#ffffff',
                        '& fieldset': {
                            borderColor: '#6366f1',
                        },
                        '&:hover fieldset': {
                            borderColor: '#818cf8',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#818cf8',
                        },
                    },
                    '& .MuiInputBase-input': {
                        '&:-webkit-autofill': {
                            WebkitBoxShadow:
                                '0 0 0 1000px #0f1535 inset !important',
                            WebkitTextFillColor: '#ffffff !important',
                        },
                        '&:-webkit-autofill:focus': {
                            WebkitBoxShadow:
                                '0 0 0 1000px #0f1535 inset !important',
                            WebkitTextFillColor: '#ffffff !important',
                        },
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#a0a0a0',
                        opacity: 1,
                    },
                    '& .MuiInputLabel-root': {
                        color: '#a0a0a0',
                    },
                }}
            />

            <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                    sx={{
                        background:
                            'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                        padding: '12px 24px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            background:
                                'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                            boxShadow: '0 12px 48px rgba(99, 102, 241, 0.4)',
                            transform: 'translateY(-2px)',
                        },
                        '&:disabled': {
                            opacity: 0.6,
                        },
                    }}
                >
                    Entrar
                </Button>

                <Button
                    fullWidth
                    variant="outlined"
                    onClick={onRegisterClick}
                    disabled={isLoading}
                    sx={{
                        borderColor: '#6366f1',
                        color: '#6366f1',
                        padding: '12px 24px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            borderColor: '#818cf8',
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        },
                        '&:disabled': {
                            opacity: 0.6,
                        },
                    }}
                >
                    Registrar
                </Button>
            </Box>
        </Box>
    );
};
