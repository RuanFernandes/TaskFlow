import { Box, Typography, Link } from '@mui/material';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                marginTop: 3,
                textAlign: 'center',
                animation: 'fadeIn 1s ease-in-out 0.6s both',
                '@keyframes fadeIn': {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: '#a0a0a0',
                    fontSize: '0.9rem',
                }}
            >
                Desenvolvido por{' '}
                <Link
                    href="https://github.com/RuanFernandes"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        fontWeight: 600,
                        background:
                            'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textDecoration: 'none',
                        transition: 'opacity 0.3s ease',
                        '&:hover': {
                            opacity: 0.8,
                        },
                    }}
                >
                    Ruan Fernandes
                </Link>
            </Typography>
        </Box>
    );
};
