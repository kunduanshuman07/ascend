import { Box, CircularProgress, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

const LoadingSkeletonComp = () => {
    return (
        <Stack sx={{ minHeight: "100vh", background: "#1e2222", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex" }}>
                <Typography sx={{ color: "grey.500" }}>Loading </Typography>
                <CircularProgress size={12} sx={{ color: "grey.500", margin: "auto 10px" }} />
            </Box>
            <Skeleton variant="text" width={210} height={60} sx={{ fontSize: '1rem', bgcolor: 'grey.700' }} />
            <Skeleton variant="text" width={210} height={60} sx={{ fontSize: '0.5rem', bgcolor: 'grey.700' }} />
            <Skeleton variant="rectangular" width={210} height={60} sx={{ bgcolor: 'grey.600' }} />
        </Stack>
    )
}

export default LoadingSkeletonComp