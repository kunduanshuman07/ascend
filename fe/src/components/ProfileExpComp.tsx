import React from 'react'
import Grid from "@mui/material/Grid2";
import ProfileGridComp from './ProfileGridComp';

interface InfoProps{
    data: any;
}

const ProfileExpComp = (props: InfoProps) => {
    return (
        <Grid container columns={{ md: 12 }} spacing={3} sx={{ background: "#000000", borderRadius: "10px",  display: "flex", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", padding: "10px" }}>
            <ProfileGridComp title={'Work'} data={'Software Developer at Incedo Inc'} action={'Edit'}/>
            <ProfileGridComp title={'Education'} data={'Bachelor of Technology'} action={'Edit'}/>
            <ProfileGridComp title={'Technical Skills'} data={'ReactJS, NodeJS, SQL'} action={'Edit'}/>
        </Grid>
    )
}

export default ProfileExpComp;