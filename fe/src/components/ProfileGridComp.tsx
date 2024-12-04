import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid2"
import axios from 'axios';

interface ProfileGridCompProps {
    title: any;
    data: any;
    action: any;
}

const ProfileGridComp = (props: ProfileGridCompProps) => {
    const user = JSON.parse(localStorage.getItem("User") || '{}')
    const [edit, setedit] = useState<boolean>(false);
    const [field, setfield] = useState<any>(props.title);
    const [value, setvalue] = useState<any>(props.data || '')
    const handleTextEdit = (e: any) => {
        setvalue(e.target.value);
        setfield(props.title);
    }
    const handleSave = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/profile/update-profile`, { username: user?.user, value: value, field: field });
        if (response?.status === 200) {
            setedit(false);
        }
        else {
            setedit(false);
            setvalue(props?.data);
        }

    }
    useEffect(() => {
        setvalue(props?.data);
        setedit(false);
        setfield(props?.title);
    }, [props])
    return (
        <>
            <Grid size={{ md: 3 }} sx={{ margin: "auto", padding: "0px 10px" }}>
                <Typography sx={{ color: "white", fontSize: "12px", fontWeight: "bold" }}>{props.title}</Typography>
            </Grid>
            <Grid size={{ md: 7 }} sx={{ margin: "auto", padding: "0px 10px" }}>
                {edit ?
                    <TextField
                        variant="standard"
                        placeholder={props.title}
                        value={value}
                        onChange={(e) => handleTextEdit(e)}
                        size="medium"
                        sx={{
                            marginRight: { md: "30px" },
                            input: {
                                color: "white",
                                borderBottom: "2px solid #9e9fa3",
                                fontSize: "0.7em",
                            },
                            "input:before": {
                                borderBottom: "2px solid #9e9fa3",
                            },
                        }}
                    /> :

                    props.action === 'Connect' ?
                        <a href={value} target='__blank' style={{ color: "skyblue", fontSize: "12px", cursor: "pointer", textDecoration: "none", fontWeight: "bold" }}>{value}</a> :
                        <Typography sx={{ color: "#c0bef7", fontSize: "12px", fontWeight: "bold" }}>{value}</Typography>


                }
            </Grid>
            <Grid size={{ md: 2 }} sx={{ padding: "0px 10px", display: "flex", margin: "auto" }}>
                {!edit ?
                    <Button color='primary' sx={{ textTransform: "none", padding: "0px", marginLeft: "auto", fontWeight: "bold", fontSize: "11px" }} onClick={() => setedit(true)}>{props.action}</Button> :
                    <>
                        <Button color='error' sx={{ textTransform: "none", padding: "0px", marginLeft: "auto", fontWeight: "bold", fontSize: "11px" }} onClick={() => setedit(false)}>Cancel</Button>
                        <Button color='warning' sx={{ textTransform: "none", padding: "0px", fontWeight: "bold", fontSize: "11px" }} onClick={handleSave}>Save</Button>
                    </>
                }
            </Grid>
        </>
    )
}

export default ProfileGridComp