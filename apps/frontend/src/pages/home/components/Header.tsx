import { Typography, Box } from '@mui/material';

export const Header = () => {
    return (
        <Box
            component="header"
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
                variant="h1"
                sx={{
                    background:
                        'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: 2,
                }}
            >
                TaskFlow
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: '#a0a0a0',
                    fontSize: '1.1rem',
                    fontWeight: 300,
                }}
            >
                Gerencie suas tarefas de forma simples e eficiente
            </Typography>
        </Box>
    );
};
