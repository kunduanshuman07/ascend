import { Typography } from '@mui/material';
import React from 'react'

interface WrapperCompProps {
    title: String;
    children: any;
}


const WrapperComp = (props: WrapperCompProps) => {
    return (
        <div style={{ minHeight: "90vh", background: "#1e2222", display: "flex", flexDirection: "column", padding: "10px" }}>
            <Typography variant='h5' sx={{ textAlign: "center", color: "#fff", fontFamily: "cursive", marginBottom: "10px", borderBottom: "2px solid #2469bc", marginX: "auto", borderRadius: "10px" }}>{props.title}</Typography>
            {props.children}
        </div>
    )
}

export default WrapperComp