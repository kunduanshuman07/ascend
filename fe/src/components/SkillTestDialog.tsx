import React from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import AscendButtonComp from './AscendButtonComp';
import CloseIcon from "@mui/icons-material/CloseFullscreenSharp";
import SkillIcon from "@mui/icons-material/AutoStories";

interface SkillTestDialogProps {
  dialogOpen: boolean;
  dialogContent: String;
  handleClose: () => any;
}

const SkillTestDialog = (props: SkillTestDialogProps) => {
  const handleBeginTest = () => {

  }
  return (
    <Dialog open={props.dialogOpen} onClose={props.handleClose} fullWidth={true} maxWidth={'xs'}>
      <DialogTitle sx={{ display: "flex" }}>
        <IconButton sx={{ marginY: "auto", color: '#063369' }}>
          <SkillIcon />
        </IconButton>
        <Typography variant='h5' sx={{ marginY: "auto" }}>{props.dialogContent}</Typography>
        <IconButton sx={{ marginLeft: "auto", marginY: "auto", color: "#000000" }} onClick={props.handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ textAlign: "center", marginTop: "10px", fontSize: "12px", backgroundColor: "#000000", color: "white", padding: "10px", borderRadius: "10px" }}>React is one of the most widely used libraries in web development, powering over 10 million websites globally, including major platforms like Facebook, Instagram, and Netflix.</Typography>
        <Typography sx={{ textAlign: "center", marginTop: "20px" }}>Take a test to build your <span style={{ fontWeight: "bold", color: "#2469bc" }}>{props.dialogContent}</span> Learning Path</Typography>
        <AscendButtonComp text={'Begin Test'} handleClick={handleBeginTest} styles={{ marginY: "10px", marginX: "auto", paddingX: "20px", borderRadius: "20px" }} />
      </DialogContent>
    </Dialog>
  )
}

export default SkillTestDialog