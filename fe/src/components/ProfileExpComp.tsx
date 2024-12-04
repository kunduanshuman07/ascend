import React from 'react'
import Grid from "@mui/material/Grid2";
import ProfileGridComp from './ProfileGridComp';

interface InfoProps{
    data: any;
}

const ProfileExpComp = (props: InfoProps) => {
    return (
        <Grid container columns={{ md: 12 }} spacing={3} sx={{ background: "#000000", borderRadius: "10px",  display: "flex", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", padding: "10px" }}>
            <ProfileGridComp title={'Work'} data={props?.data?.work} action={'Edit'}/>
            <ProfileGridComp title={'Education'} data={props?.data?.education} action={'Edit'}/>
            <ProfileGridComp title={'Skills'} data={props?.data?.skills} action={'Edit'}/>
        </Grid>
    )
}

export default ProfileExpComp;