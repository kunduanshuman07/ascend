import React from 'react';
import AppBarComp from '../components/AppBarComp';
import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import SkillPage from '../pages/SkillPage';
import ClassroomPage from '../pages/ClassroomPage';
import DashboardPage from '../pages/DashboardPage';
import LeaderboardPage from '../pages/LeaderboardPage';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';


const UserLayout = () => {
  return (
    <div>
      <AppBarComp />
      <Box component="main" sx={{ width: "100%", marginTop: "60px" }}>
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/skills' element={<SkillPage />} />
            <Route path='/classroom' element={<ClassroomPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/leaderboard' element={<LeaderboardPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </div>
      </Box>
    </div>
  );
}

export default UserLayout;
