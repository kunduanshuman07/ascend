import React from 'react'
import Grid from "@mui/material/Grid2";
import ProfileGridComp from './ProfileGridComp';
import AscendButtonComp from './AscendButtonComp';

interface InfoProps{
    data: any;
}

const ProfileAccountComp = (props: InfoProps) => {
    const handleDeleteAccount = () => {

    }
    return (
        <Grid container columns={{ md: 12 }} spacing={3} sx={{ background: "#000000", borderRadius: "10px",  display: "flex", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", padding: "10px" }}>
            <ProfileGridComp title={'Username'} data={'Software Developer at Incedo Inc'} action={'Edit'}/>
            <ProfileGridComp title={'Email'} data={'Bachelor of Technology'} action={'Edit'}/>
            <ProfileGridComp title={'Password'} data={'Change Password'} action={''}/>
            <AscendButtonComp text={'Delete Account'} handleClick={handleDeleteAccount} styles={{backgroundColor: "red", margin: "10px 0px"}}/>
        </Grid>
    )
}

export default ProfileAccountComp;