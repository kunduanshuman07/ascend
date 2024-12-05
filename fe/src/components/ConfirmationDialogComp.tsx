import React from 'react'
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import AscendButtonComp from './AscendButtonComp';
import CodeIcon from '@mui/icons-material/Error';

interface ConfirmationDialogCompProps {
    dialogOpen: boolean;
    settestdialogOpen: () => any;
    setdialogOpen: (x: boolean) => any;
}
const ConfirmationDialogComp = (props: ConfirmationDialogCompProps) => {
    const handleEndTest = () => {
        props.setdialogOpen(false);
        props.settestdialogOpen();

    }
    const handleResumeTest = () => {
        props.setdialogOpen(false);
    }
    return (
        <Dialog
            open={props.dialogOpen}
            fullWidth={true}
            fullScreen={false}
            maxWidth={'xs'}
            sx={{

            }}
        >
            <DialogTitle sx={{ display: "flex", color: "#fff" }}>
                <IconButton sx={{ marginY: "auto", color: 'red' }}>
                    <CodeIcon />
                </IconButton>
                <Typography sx={{ marginY: "auto", color: "#0c325e", fontWeight: "bold", fontSize: "12px" }}>{'Are you sure you want to end the test? This is will not save any progress.'}</Typography>
            </DialogTitle>
            <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", marginY: "20px" }}>
                    <AscendButtonComp text={'Yes, End test'} handleClick={handleEndTest} styles={{ background: "gray", marginLeft: "auto" }} />
                    <AscendButtonComp text={'No'} handleClick={handleResumeTest} styles={{ background: "primary", marginRight: "auto" }} />
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmationDialogComp;