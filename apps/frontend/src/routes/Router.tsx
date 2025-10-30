import { createBrowserRouter } from 'react-router';
import Home from '../pages/home';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);
