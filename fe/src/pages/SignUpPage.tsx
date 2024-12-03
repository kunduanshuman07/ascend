import { Alert, Backdrop, Box, CircularProgress, IconButton, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import AscendButtonComp from '../components/AscendButtonComp'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const SignUpPage = () => {
    const [username, setusername] = useState<any>('');
    const [password, setpassword] = useState<any>('');
    const [name, setname] = useState<any>('');
    const [email, setemail] = useState<any>('');
    const [loading, setloading] = useState<boolean>(false);
    const [error, seterror] = useState<any>('');
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const handleSignUp = async () => {
        setloading(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, { username, password, email, name });
            if (response?.status === 200) {
                localStorage.setItem("User", JSON.stringify(response?.data));
                setAuth(true)
                navigate('/skills');
            }
            else {
                seterror(response?.data?.errormsg);
            }
        } catch (error: any) {
            seterror(error.message);
        } finally {
            setloading(false);
        }
    }
    return (
        <div style={{ minHeight: "100vh", background: "#1e2222", display: "flex", width: "100%" }}>

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
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    placeholder='Username'
                    style={{ background: "#1e2222", border: "none", lineHeight: "30px", width: "200px", fontSize: "12px", padding: "5px 20px", borderRadius: "8px", color: "white", margin: "10px auto" }}
                />
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder='Email'
                    style={{ background: "#1e2222", border: "none", lineHeight: "30px", width: "200px", fontSize: "12px", padding: "5px 20px", borderRadius: "8px", color: "white", margin: "10px auto" }}
                />
                <input
                    type='name'
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder='Name'
                    style={{ background: "#1e2222", border: "none", lineHeight: "30px", width: "200px", fontSize: "12px", padding: "5px 20px", borderRadius: "8px", color: "white", margin: "10px auto" }}
                />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder='Password'
                    style={{ background: "#1e2222", border: "none", lineHeight: "30px", width: "200px", fontSize: "12px", padding: "5px 20px", borderRadius: "8px", color: "white", margin: "10px auto" }}
                />
                <AscendButtonComp text={'Sign Up'} handleClick={handleSignUp} styles={{ margin: "10px 0px", borderRadius: "10px" }} />
                <Box sx={{ display: "flex", mt: "2px" }}>
                    <Typography sx={{
                        fontWeight: "bold", fontSize: "10px", color: "white", marginRight: "auto", cursor: "pointer", ":hover": {
                            color: "#2469bc"
                        }
                    }} onClick={() => navigate('/signin')}>Sign In</Typography>
                </Box>
                <Typography sx={{ fontWeight: "bold", fontSize: "12px", color: "#9e9fa3", margin: '20px auto 5px auto', cursor: "pointer" }}>or you can sign up with</Typography>
                <Box sx={{ display: "flex", margin: "auto" }}>
                    <IconButton size='small' sx={{ color: "white" }}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton size='small' sx={{ color: "white" }}>
                        <GoogleIcon />
                    </IconButton>
                </Box>
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Snackbar open={error !== ''} autoHideDuration={6000} onClose={() => seterror('')}>
                    <Alert
                        onClose={() => seterror('')}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {error}
                    </Alert>
                </Snackbar>
            </Box>
        </div>
    )
}

export default SignUpPage