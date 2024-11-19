import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import AscendButtonComp from '../components/AscendButtonComp'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

interface AuthenticationCompProps{
    type: Number;
}

const AuthenticationComp = (props: AuthenticationCompProps) => {
    const handleSignIn = () => {

    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column", background: "#000000", margin: "auto", padding: "10px 30px", borderRadius: "10px", width: { xs: "70%", md: "30%" } }}>
            <Box
                component="img"
                src="/assets/ascend.svg"
                alt="logo"
                width={30}
                height={30}
                sx={{
                    display: { sm: "block", cursor: "pointer" },
                    margin: "auto"
                }}
            />
            <Typography variant="h6" sx={{ m: "auto", color: "white", marginRight: "auto", fontSize: "18px" }}>
                ascend
            </Typography>

            <input
                type='text'
                placeholder='Username or E-mail'
                style={{ background: "#1e2222", border: "none", lineHeight: "30px", width: "200px", fontSize: "12px", padding: "5px 20px", borderRadius: "8px", color: "white", margin: "10px auto" }}
            />
            <input
                type='password'
                placeholder='Password'
                style={{ background: "#1e2222", border: "none", lineHeight: "30px", width: "200px", fontSize: "12px", padding: "5px 20px", borderRadius: "8px", color: "white", margin: "10px auto" }}
            />
            <AscendButtonComp text={'Sign In'} handleClick={handleSignIn} styles={{ margin: "10px 0px", borderRadius: "10px" }} />
            <Box sx={{ display: "flex", mt: "2px" }}>
                <Typography sx={{
                    fontWeight: "bold", fontSize: "10px", color: "white", marginRight: "auto", cursor: "pointer", ":hover": {
                        color: "#2469bc"
                    }
                }}>Forgot Password?</Typography>
                <Typography sx={{
                    fontWeight: "bold", fontSize: "10px", color: "white", marginLeft: "auto", cursor: "pointer", ":hover": {
                        color: "#2469bc"
                    }
                }}>SignUp</Typography>
            </Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "12px", color: "#9e9fa3", margin: '20px auto 5px auto', cursor: "pointer" }}>or you can sign in with</Typography>
            <Box sx={{ display: "flex", margin: "auto" }}>
                <IconButton size='small' sx={{ color: "white" }}>
                    <GitHubIcon />
                </IconButton>
                <IconButton size='small' sx={{ color: "white" }}>
                    <GoogleIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default AuthenticationComp