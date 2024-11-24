import React from 'react'
import Grid from "@mui/material/Grid2";
import ProfileGridComp from './ProfileGridComp';

const ProfileBasicInfoComp = () => {
    return (
        <Grid container columns={{ md: 12 }} spacing={3} sx={{ background: "#000000", borderRadius: "10px",  display: "flex", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", padding: "10px" }}>
            <ProfileGridComp title={'Name'} data={'Anshuman Kundu'} action={'Edit'}/>
            <ProfileGridComp title={'Gender'} data={'Male'} action={'Edit'}/>
            <ProfileGridComp title={'Location'} data={'Ranchi, Jharkhand'} action={'Edit'}/>
            <ProfileGridComp title={'Birthday'} data={'23rd March 2000'} action={'Edit'}/>
            <ProfileGridComp title={'Summary'} data={'I am a Software Developer'} action={'Edit'}/>
        </Grid>
    )
}

export default ProfileBasicInfoComp