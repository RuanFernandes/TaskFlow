import { AppBar, Box, Toolbar } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { UserMenuButton } from './components/UserMenuButton';
import { TaskFlowLogo } from './components/TaskFlowLogo';
import { LoginButton } from './components/LoginButton';

export function Navbar() {
    const { user } = useAuth();

    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    minHeight: '70px',
                    px: {
                        xs: 2,
                        sm: 3,
                    },
                }}
            >
                <TaskFlowLogo />

                <Box sx={{ flexGrow: 1 }} />

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: {
                            xs: 1.5,
                            sm: 2,
                        },
                    }}
                    key={user?.id || 'not-authenticated'}
                >
                    {user ? <UserMenuButton /> : <LoginButton />}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
