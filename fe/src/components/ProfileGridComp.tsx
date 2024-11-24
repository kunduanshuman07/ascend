import { Button, Typography } from '@mui/material'
import React from 'react'
import Grid from "@mui/material/Grid2"

interface ProfileGridCompProps {
    title: any;
    data: any;
    action: any;
}

const ProfileGridComp = (props: ProfileGridCompProps) => {
    return (
        <>
            <Grid size={{ md: 3 }} sx={{ margin: "auto", padding: "0px 10px" }}>
                <Typography sx={{ color: "white", fontSize: "12px", fontWeight: "bold" }}>{props.title}</Typography>
            </Grid>
            <Grid size={{ md: 7 }} sx={{ margin: "auto", padding: "0px 10px" }}>
                <Typography sx={{ color: "white", fontSize: "12px" }}>{props.data}</Typography>
            </Grid>
            <Grid size={{ md: 2 }} sx={{ padding: "0px 10px", display: "flex", margin: "auto" }}>
                <Button color='primary' sx={{ textTransform: "none", padding: "0px", marginLeft: "auto", fontWeight: "bold", fontSize: "11px" }}>{props.action}</Button>
            </Grid>
        </>
    )
}

export default ProfileGridComp