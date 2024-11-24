import { Box, Typography } from '@mui/material'
import React from 'react'

const ProfileHeaderComp = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", backgroundColor: "#4f4e4e", height: "100px", borderRadius: "10px"}}>
      <Typography variant='h5' sx={{color: "white", margin: "auto auto 5px auto", fontWeight: "bold"}}>Anshuman Kundu</Typography>
      <Typography sx={{fontSize: "10px", color: "white", margin: "0px auto auto auto", textAlign: "left"}}>Username: kunduanshuman07</Typography>
    </Box>
  )
}

export default ProfileHeaderComp