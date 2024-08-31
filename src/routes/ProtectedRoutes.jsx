// @ts-nocheck
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';
import authContext from '../context/authContext';

function ProtectedRoutes() {

    const { currentUser } = useContext(authContext);

    if (!currentUser) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
}

export default ProtectedRoutes