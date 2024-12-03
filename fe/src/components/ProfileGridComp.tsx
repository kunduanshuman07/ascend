import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Grid from "@mui/material/Grid2"

interface ProfileGridCompProps {
    title: any;
    data: any;
    action: any;
}

const ProfileGridComp = (props: ProfileGridCompProps) => {
    const [edit, setedit] = useState<boolean>(false);
    const handleSave = () => {

    }
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
                    <Typography sx={{ color: "white", fontSize: "12px" }}>{props.data}</Typography>
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