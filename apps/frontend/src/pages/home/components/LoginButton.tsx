import { Button, Box } from '@mui/material';

interface LoginButtonProps {
    onClick: () => void;
}

export const LoginButton = ({ onClick }: LoginButtonProps) => {
    return (
        <Box
            component="div"
            sx={{
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
                size="large"
                onClick={onClick}
                sx={{
                    background:
                        'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                    padding: '14px 48px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        background:
                            'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                        boxShadow: '0 12px 48px rgba(99, 102, 241, 0.5)',
                        transform: 'translateY(-2px)',
                    },
                    '&:active': {
                        transform: 'translateY(0)',
                    },
                }}
            >
                Login
            </Button>
        </Box>
    );
};
