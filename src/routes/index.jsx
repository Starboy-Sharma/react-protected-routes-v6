// @ts-nocheck
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import ProtectedRoutes from './protectedRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },

      {
        path: '/profile',
        element: <Profile />,
      }
    ],
  },
]);
