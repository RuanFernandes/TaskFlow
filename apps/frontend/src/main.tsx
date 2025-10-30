import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { darkTheme } from './theme/darkTheme';
import { routes } from './routes/Router.tsx';
import { AuthProvider } from './providers/AuthProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <RouterProvider router={routes} />
            </ThemeProvider>
        </AuthProvider>
    </StrictMode>,
);
