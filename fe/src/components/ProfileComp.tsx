import { Box } from '@mui/material'
import React from 'react'
import ProfileHeaderComp from './ProfileHeaderComp'
import ProfileTabComp from './ProfileTabComp'

const ProfileComp = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ProfileHeaderComp />
      <Box sx={{ display: "flex", marginTop: "10px", paddingX: "20px", width: "100%" }}>
        <ProfileTabComp />
      </Box>
    </Box>
  )
}

export default ProfileComp