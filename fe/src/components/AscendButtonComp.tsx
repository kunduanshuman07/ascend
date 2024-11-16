import { Button } from '@mui/material'
import React from 'react'

interface AscendButtonCompProps {
    text: any;
    handleClick: () => any;
    styles?: object;
}

const AscendButtonComp = (props: AscendButtonCompProps) => {
    return (
        <Button
            sx={{
                backgroundColor: "#2469bc",
                textTransform: "none",
                color: "white",
                ":hover": {
                    backgroundColor: "#063369"
                },
                ...props.styles
            }}
            onClick={props.handleClick}>
            {props.text}
        </Button>
    )
}

export default AscendButtonComp