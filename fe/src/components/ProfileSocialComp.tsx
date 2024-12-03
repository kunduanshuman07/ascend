import React from 'react'
import Grid from "@mui/material/Grid2";
import ProfileGridComp from './ProfileGridComp';

interface InfoProps{
    data: any;
}

const ProfileSocialComp = (props: InfoProps) => {
    return (
        <Grid container columns={{ md: 12 }} spacing={3} sx={{ background: "#000000", borderRadius: "10px",  display: "flex", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", padding: "10px" }}>
            <ProfileGridComp title={'Github'} data={'Software Developer at Incedo Inc'} action={'Connect'}/>
            <ProfileGridComp title={'Linkedin'} data={'Bachelor of Technology'} action={'Connect'}/>
            <ProfileGridComp title={'Google'} data={'ReactJS, NodeJS, SQL'} action={'Connect'}/>
            <ProfileGridComp title={'Facebook'} data={'ReactJS, NodeJS, SQL'} action={'Connect'}/>
            <ProfileGridComp title={'Twitter'} data={'ReactJS, NodeJS, SQL'} action={'Connect'}/>
        </Grid>
    )
}

export default ProfileSocialComp;