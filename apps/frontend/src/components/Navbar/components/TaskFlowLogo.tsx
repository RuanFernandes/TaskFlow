import { Box, Typography } from '@mui/material';

export function TaskFlowLogo() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.25,
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                padding: '8px',
                borderRadius: '8px',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}
        >
            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#818cf8',
                    letterSpacing: '0.5px',
                }}
            >
                TaskFlow
            </Typography>
        </Box>
    );
}
