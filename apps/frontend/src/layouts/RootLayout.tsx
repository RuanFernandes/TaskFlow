import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import { Navbar } from '../components/Navbar';

export function RootLayout() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            <Navbar />
            <Box
                component="main"
                sx={{
                    flex: 1,
                    overflow: 'auto',
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}
