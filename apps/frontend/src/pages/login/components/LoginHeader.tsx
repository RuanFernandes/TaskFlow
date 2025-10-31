import { Typography, Box } from '@mui/material';
import { LogoHero } from '../../home/components/LogoHero';

export const LoginHeader = () => {
    return (
        <Box
            component="header"
            sx={{
                textAlign: 'center',
                animation: 'fadeInDown 0.8s ease-in-out',
                marginBottom: 4,
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
            <Box sx={{ marginBottom: 2 }}>
                <LogoHero />
            </Box>
            <Typography
                variant="body1"
                sx={{
                    color: '#a0a0a0',
                    fontSize: {
                        xs: '0.9rem',
                        sm: '1rem',
                    },
                    fontWeight: 300,
                }}
            >
                Bem-vindo ao TaskFlow
            </Typography>
        </Box>
    );
};
