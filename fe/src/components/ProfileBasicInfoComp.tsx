import React from 'react'
import Grid from "@mui/material/Grid2";
import ProfileGridComp from './ProfileGridComp';

interface InfoProps{
    data: any;
}

const ProfileBasicInfoComp = (props: InfoProps) => {
    return (
        <Grid container columns={{ md: 12 }} spacing={3} sx={{ background: "#000000", borderRadius: "10px",  display: "flex", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", padding: "10px" }}>
            <ProfileGridComp title={'Name'} data={props?.data?.name} action={'Edit'}/>
            <ProfileGridComp title={'Gender'} data={props?.data?.gender || ''} action={'Edit'}/>
            <ProfileGridComp title={'Location'} data={props?.data?.location || ''} action={'Edit'}/>
            <ProfileGridComp title={'Birthday'} data={props?.data?.birthday || ''} action={'Edit'}/>
            <ProfileGridComp title={'Summary'} data={props?.data?.summary || ''} action={'Edit'}/>
        </Grid>
    )
}

export default ProfileBasicInfoComp