import React from 'react'
import Grid from "@mui/material/Grid2"
import DashLeaderBoardHeader from './DashLeaderBoardHeader'
import DashLeaderBoardContent from './DashLeaderBoardContent'

const DashLeaderboard = () => {
  return (
    <Grid container spacing={1} columns={{ xs: 12, md: 12 }} sx={{marginBottom: "10px"}}>
      <DashLeaderBoardHeader />
      <DashLeaderBoardContent/>
      <DashLeaderBoardContent/>
      <DashLeaderBoardContent/>
    </Grid>
  )
}

export default DashLeaderboard