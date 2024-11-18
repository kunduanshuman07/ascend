import React from 'react'
import Grid from "@mui/material/Grid2";
import LearningPathComp from './LearningPathComp';
import FinishedPathsComp from './FinishedPathsComp';

const ClassroomComp = () => {
    return (
        <Grid container columnSpacing={6} rowSpacing={2} columns={{ xs: 1, md: 1 }}>
            <Grid size={{ xs: 1, md: 1 }}>
                <LearningPathComp />
            </Grid>
            <Grid size={{ xs: 1, md: 1 }}>
                <FinishedPathsComp/>
            </Grid>
        </Grid>
    )
}

export default ClassroomComp