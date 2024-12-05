import React, { useState } from 'react'
import { Box, Checkbox, Dialog, DialogContent, DialogTitle, IconButton, Radio, Typography } from '@mui/material'
import AscendButtonComp from './AscendButtonComp';
import CloseIcon from "@mui/icons-material/CloseFullscreenSharp";
import CodeIcon from '@mui/icons-material/Code';
import ConfirmationDialogComp from './ConfirmationDialogComp';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

interface TestDialogCompProps {
    dialogOpen: boolean;
    testid: String;
    dialogTitle: String;
    handleClose: () => any;
}
const TestDialogComp = (props: TestDialogCompProps) => {
    const [endtestdialog, setendtestdialog] = useState<boolean>(false);
    const handleEndTest = () => {
        setendtestdialog(true);
    }
    const handleAnswerSubmit = () => {

    }
    return (
        <Dialog
            open={props.dialogOpen}
            fullWidth={true}
            fullScreen={true}
            sx={{

            }}
        >
            <DialogTitle sx={{ display: "flex", color: "#fff", backgroundColor: "#000000" }}>
                <IconButton sx={{ marginY: "auto", color: 'gray' }}>
                    <CodeIcon />
                </IconButton>
                <Typography variant='h5' sx={{ marginY: "auto", color: "whitesmoke", fontWeight: "bold" }}>{props.dialogTitle}</Typography>
                <IconButton sx={{ marginLeft: "auto", marginY: "auto", color: "gray" }} onClick={handleEndTest}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ display: "flex", flexDirection: "column", background: "#1e2222", minHeight: "80vh", alignContent: "center" }}>
                <Box sx={{ background: "#000000", color: "whitesmoke", borderRadius: "10px", padding: "10px 40px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
                    <Typography sx={{ fontSize: "22px", fontWeight: "bold", color: "#f7f2c1", textAlign: "center", marginTop: "10px" }}>{'Q.1 What is ReactJS?'}</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", marginX: "auto", marginY: "20px", backgroundColor: "#1e2222", borderRadius: "10px", padding: "10px 20px" }}>
                        <Box sx={{ display: "flex" }}>
                            <Checkbox sx={{ color: "white" }} checkedIcon={<TaskAltIcon color='warning' />} />
                            <Typography sx={{ color: "white", marginY: "auto", fontWeight: "bold" }}>Option 1</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Checkbox sx={{ color: "white" }} checkedIcon={<TaskAltIcon color='warning' />} />
                            <Typography sx={{ color: "white", marginY: "auto", fontWeight: "bold" }}>Optiozxczxcxn 1</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Checkbox sx={{ color: "white" }} checkedIcon={<TaskAltIcon color='warning' />} />
                            <Typography sx={{ color: "white", marginY: "auto", fontWeight: "bold" }}>Optixc on 1</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Checkbox sx={{ color: "white" }} checkedIcon={<TaskAltIcon color='warning' />} />
                            <Typography sx={{ color: "white", marginY: "auto", fontWeight: "bold" }}>Optcxcion 1</Typography>
                        </Box>
                    </Box>
                    <AscendButtonComp text={'Submit'} handleClick={handleAnswerSubmit} styles={{ backgroundColor: "#08a608" }} />
                </Box>
            </DialogContent>
            <ConfirmationDialogComp dialogOpen={endtestdialog} settestdialogOpen={props.handleClose} setdialogOpen={setendtestdialog} />
        </Dialog>
    )
}

export default TestDialogComp;