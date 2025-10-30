import { Container, Box, Typography } from '@mui/material';

const Login = () => {
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    gap: 3,
                }}
            >
                <Typography variant="h4" component="h1" fontWeight="bold">
                    Faça Login
                </Typography>
                <Typography color="textSecondary">
                    Página de login será implementada aqui
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
