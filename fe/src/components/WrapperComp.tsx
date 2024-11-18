import React from 'react'
import { Container } from '@mui/material'

interface WrapperCompProps {
    title: String;
    children: any;
}


const WrapperComp = (props: WrapperCompProps) => {
    return (
        <Container sx={{ padding: "20px 5px", display: "flex", flexDirection: "column", minHeight: "90vh" }}>
            {props.children}
        </Container>
    )
}

export default WrapperComp