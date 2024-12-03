import { Box, Typography } from '@mui/material'
import React from 'react'

const ErrorSkeletonComp = () => {
    return (
        <div style={{ minHeight: "100vh", background: "#1e2222", justifyContent: "center", alignItems: "center" }}>
            <Typography color='info' sx={{ fontWeight: "bold", margin: "10px" }}>An error occurred !</Typography>
        </div>
    )
}

export default ErrorSkeletonComp