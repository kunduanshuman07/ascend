import React from 'react'
import WrapperComp from '../components/WrapperComp'
import Grid from "@mui/material/Grid2"
import DashCircularComp from '../components/DashCircularComp'
import DashStackedBarComp from '../components/DashStackedBarComp'
import DashLineComp from '../components/DashLineComp'
import DashHeatMapComp from '../components/DashHeatMapComp'
import DashPieComp from '../components/DashPieComp'
import DashLeaderboard from '../components/DashLeaderboard'
import { Box } from '@mui/material'
import DashboardComp from '../components/DashboardComp'
import DashTreeComp from '../components/DashTreeComp'
import DashFunnelComp from '../components/DashFunnelComp'



const DashboardPage = () => {
  return (
    <WrapperComp title={'Dashboard'}>
      <Grid container spacing={3} columns={{ xs: 1, md: 12 }} sx={{ display: "flex" }}>
        <DashboardComp md={3} children={<DashCircularComp />} title={'Active Course: ReactJS'} />
        <DashboardComp md={5} children={<Box sx={{ marginY: "auto" }}>
          <DashLineComp />
        </Box>} title={'Score Trend'} />
        <DashboardComp md={4} children={<Box sx={{ marginY: "auto" }}>
          <DashStackedBarComp />
        </Box>} title={'Learning : You vs All'} />
        <DashboardComp md={5} children={<Box sx={{ margin: "auto 20px"}}>
          <DashTreeComp />
        </Box>} title={'Your Learning Domains'} />
        <DashboardComp md={3} children={<Box sx={{ marginY: "auto" }}>
          <DashPieComp />
        </Box>} title={'Badge Time Distribution'} />
        <DashboardComp md={4} children={<Box sx={{margin: "auto 10px"}}>
          <DashFunnelComp />
        </Box>} title={'Learning Distribution by Days'} />
        <DashboardComp md={7} children={<Box sx={{margin: "auto 20px"}}>
          <DashHeatMapComp />
        </Box>
        } title={'Learning Streak'} />
        <DashboardComp md={5} children={<DashLeaderboard />} title={'Leaderboard'} />
      </Grid>
    </WrapperComp>
  )
}

export default DashboardPage