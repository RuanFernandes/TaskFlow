import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function LogoHero() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
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
            <CheckCircleIcon
                sx={{
                    fontSize: 56,
                    background:
                        'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 4px 12px rgba(99, 102, 241, 0.2))',
                }}
            />
            <Typography
                sx={{
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                    },
                    fontWeight: 700,
                    background:
                        'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '1px',
                }}
            >
                TaskFlow
            </Typography>
        </Box>
    );
}
