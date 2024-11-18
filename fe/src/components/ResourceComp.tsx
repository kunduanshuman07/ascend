import { Box, Checkbox, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LockIcon from '@mui/icons-material/Lock';
import ArrowDownIcon from '@mui/icons-material/ExpandMore';
import ArrowUpIcon from '@mui/icons-material/ExpandLess';

interface ResourceCompProps {
    locked: boolean;
}

const ResourceComp = (props: ResourceCompProps) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: "#000000",
                    width: "100%",
                    cursor: "pointer",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    marginTop: "10px",
                    padding: "10px",
                    alignItems: "center",
                    boxShadow: !show ? "0 2px 10px rgba(0, 0, 0, 0.2)" : "",
                    transition: !show ? "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease" : "",
                    '&:hover': {
                        transform: !show ? "scale(1.03)" : "",
                        boxShadow: !show ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "",
                        backgroundColor: !show ? "#333333" : "",
                    },
                    '&:active': {
                        transform: !show ? "scale(1.03)" : "",
                    },
                }}
            >
                <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<TaskAltIcon />}
                    size="small"
                    sx={{
                        color: "whitesmoke",
                        '&.Mui-checked': {
                            color: "whitesmoke",
                        },
                        transition: "transform 0.2s ease",
                    }}
                />
                <Typography
                    sx={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "whitesmoke",
                        marginY: "auto",
                        transition: "color 0.3s ease",
                        '&:hover': {
                            color: "#63a4ff",
                        },
                    }}
                >
                    What is ReactJS?
                </Typography>
                {props.locked ?
                    <IconButton sx={{ color: "whitesmoke", marginLeft: "auto", transition: "transform 0.3s ease" }}>
                        <LockIcon />
                    </IconButton> :
                    <IconButton sx={{ color: "whitesmoke", marginLeft: "auto", transition: "transform 0.3s ease" }}
                        onClick={() => setShow(!show)}
                    >
                        {show ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </IconButton>
                }
            </Box>
            <Box sx={{
                display: show ? 'flex' : 'none',
                backgroundColor: "#000000",
                width: "100%",
                cursor: "pointer",
                padding: "10px",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                transition: 'display 0.3s ease'
            }}>
                <Typography sx={{ color: "white" }}>Details</Typography>
            </Box>
        </Box>
    )
}

export default ResourceComp