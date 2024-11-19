import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserLayout from './layout/UserLayout';
import SignInPage from './pages/SignInPage';

const RoutesJS = () => {
    return (
        <Routes>
            <Route
                path='/*'
                element={<UserLayout />}
            />
            <Route path='/signin' element={<SignInPage />} />
        </Routes>
    )
}

export default RoutesJS