import { Box } from '@mui/material';
import type { ReactNode } from 'react';

interface LoginContainerProps {
    children: ReactNode;
}

export const LoginContainer = ({ children }: LoginContainerProps) => {
    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'fixed',
                    top: '-50%',
                    right: '-10%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background:
                        'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                },
                '&::after': {
                    content: '""',
                    position: 'fixed',
                    bottom: '-30%',
                    left: '-10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background:
                        'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    maxWidth: '400px',
                    px: 2,
                }}
            >
                {children}
            </Box>
        </Box>
    );
};
