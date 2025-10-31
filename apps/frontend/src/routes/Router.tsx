import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../layouts/RootLayout';
import Home from '../pages/home';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import { ProtectedRoute } from './ProtectedRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/dashboard',
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
