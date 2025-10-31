import { Box, Container, Button, Typography } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '../../hooks/useNavigation';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const { handleGoHome } = useNavigation();

    const handleLogout = () => {
        logout();
        handleGoHome();
    };

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        animation: 'fadeInDown 0.8s ease-in-out',
                        '@keyframes fadeInDown': {
                            from: {
                                opacity: 0,
                                transform: 'translateY(-30px)',
                            },
                            to: {
                                opacity: 1,
                                transform: 'translateY(0)',
                            },
                        },
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            marginBottom: 1,
                        }}
                    >
                        Bem-vindo, {user?.name}!
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#a0a0a0',
                            fontSize: '1.1rem',
                        }}
                    >
                        Email: {user?.email}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        animation: 'fadeInUp 0.8s ease-in-out 0.2s both',
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
                    <Button
                        variant="contained"
                        onClick={handleLogout}
                        sx={{
                            background:
                                'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                            padding: '12px 32px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                                background:
                                    'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                                boxShadow:
                                    '0 12px 48px rgba(99, 102, 241, 0.4)',
                                transform: 'translateY(-2px)',
                            },
                        }}
                    >
                        Logout
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Dashboard;
