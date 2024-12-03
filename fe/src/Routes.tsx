import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import UserLayout from './layout/UserLayout';
import SignInPage from './pages/SignInPage';
import { useAuth } from './context/AuthProvider';
import { LinearProgress } from '@mui/material';
import SignUpPage from './pages/SignUpPage';

const RoutesJS = () => {
    const { auth } = useAuth();
    return (
        <Routes>
            <Route
                path='/*'
                element={
                    <Suspense fallback={<LinearProgress color='info' />}>
                        {auth ? <UserLayout /> : <Navigate to="/signin" replace />}
                    </Suspense>
                }
            />
            <Route
                path='/signin'
                element={<SignInPage />}
            />
            <Route
                path='/signup'
                element={<SignUpPage />}
            />
        </Routes>
    )
}

export default RoutesJS