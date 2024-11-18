import { Button } from '@mui/material'
import React from 'react'
import RightArrowIcon from "@mui/icons-material/ArrowRight"


interface AscendButtonCompProps {
    text: any;
    handleClick: () => any;
    styles?: object;
}

const AscendButtonComp = (props: AscendButtonCompProps) => {
    return (
        <Button
            endIcon={<RightArrowIcon />}
            onClick={props.handleClick}
            variant="contained"
            sx={{
                backgroundColor: '#007bff',
                color: 'whitesmoke',
                fontSize: { md: '10px', xs: '8px' },
                fontWeight: 'bold',
                textTransform: 'capitalize',
                padding: "5px 20px",
                borderRadius: '30px',
                boxShadow: '0 4px 10px rgba(0, 123, 255, 0.5)',
                position: 'relative',
                overflow: 'hidden',
                marginLeft: "auto",
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    backgroundColor: '#0056b3',
                    boxShadow: '0 6px 15px rgba(0, 86, 179, 0.7)',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
                    top: 0,
                    left: '-100%',
                    zIndex: 1,
                    transition: 'all 0.5s ease',
                    borderRadius: '30px',
                },
                '&:hover::after': {
                    left: '100%',
                },
                ...props.styles
            }}
        >
            {props.text}
        </Button>
    )
}

export default AscendButtonComp