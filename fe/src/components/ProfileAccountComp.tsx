import React from 'react'
import Grid from "@mui/material/Grid2";
import ProfileGridComp from './ProfileGridComp';
import AscendButtonComp from './AscendButtonComp';

interface InfoProps {
    data: any;
}

const ProfileAccountComp = (props: InfoProps) => {
    const handleDeleteAccount = () => {

    }
    const handleChangePassword = () => {

    }
    return (
        <Grid container columns={{ md: 12 }} spacing={3} sx={{ background: "#000000", borderRadius: "10px", display: "flex", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", padding: "10px" }}>
            <ProfileGridComp title={'Username'} data={props?.data?.username} action={''} />
            <ProfileGridComp title={'Email'} data={props?.data?.email} action={''} />
            <AscendButtonComp text={'Change Password'} handleClick={handleChangePassword} styles={{ backgroundColor: "orange", margin: "10px 0px" }} />
            <AscendButtonComp text={'Delete Account'} handleClick={handleDeleteAccount} styles={{ backgroundColor: "red", margin: "10px 0px" }} />
        </Grid>
    )
}

export default ProfileAccountComp;