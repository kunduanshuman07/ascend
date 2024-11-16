import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserLayout from './layout/UserLayout';

const RoutesJS = () => {
    return (
        <Routes>
            <Route
                path='/*'
                element={<UserLayout />}
            />
        </Routes>
    )
}

export default RoutesJS