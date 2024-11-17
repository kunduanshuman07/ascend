import { Box, Typography } from '@mui/material'
import React from 'react'

interface SkillImageCompProps {
    title: String;
    imageUrl: String;
}

const SkillImageComp = (props: SkillImageCompProps) => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "200px",
                backgroundImage: `url(${props.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                    transform: "translateY(-10px)",
                },
                "&:hover .hoverOverlay": {
                    opacity: 2,
                },
            }}
        >
            <Box
                className="hoverOverlay"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    zIndex: 1,
                }}
            />
            <Typography
                variant="h5"
                sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "white",
                    zIndex: 2,
                }}
            >
                {props.title}
            </Typography>
        </Box>
    )
}

export default SkillImageComp