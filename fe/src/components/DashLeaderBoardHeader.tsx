import React from 'react'
import Grid from "@mui/material/Grid2"
import { Typography } from '@mui/material'
const DashLeaderBoardHeader = () => {
    return (
        <>
            <Grid size={2}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "bold", textAlign: "center" }}>Rank</Typography>
            </Grid>
            <Grid size={5}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "bold", textAlign: "center" }}>Name</Typography>
            </Grid>
            <Grid size={3}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "bold", textAlign: "center" }}>Score</Typography>
            </Grid>
            <Grid size={2}>
                <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "bold", textAlign: "center" }}>Time</Typography>
            </Grid>
        </>
    )
}

export default DashLeaderBoardHeader