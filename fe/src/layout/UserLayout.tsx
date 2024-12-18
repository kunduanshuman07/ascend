import React from 'react';
import AppBarComp from '../components/AppBarComp';
import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import SkillPage from '../pages/SkillPage';
import ClassroomPage from '../pages/ClassroomPage';
import DashboardPage from '../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import FooterComp from '../components/FooterComp';
import ActivePathPage from '../pages/ActivePathPage';


const UserLayout = () => {
  const user = localStorage.getItem("User");
  console.log(user);
  return (
    <div>
      <AppBarComp />
      <Box component="main" sx={{ width: "100%", mt: "40px" }}>
        <div>
          <Routes>
            <Route path='/skills' element={<SkillPage />} />
            <Route path='/classroom' element={<ClassroomPage />} />
            <Route path='/classroom/active-path' element={<ActivePathPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </div>
      </Box>
      <FooterComp />
    </div>
  );
}

export default UserLayout;
