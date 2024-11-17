import React from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import AscendButtonComp from './AscendButtonComp';
import CloseIcon from "@mui/icons-material/CloseFullscreenSharp";
import CodeIcon from '@mui/icons-material/Code';

interface SkillTestDialogProps {
  dialogOpen: boolean;
  dialogContent: String;
  handleClose: () => any;
}
const SkillTestDialog = (props: SkillTestDialogProps) => {
  const handleBeginTest = () => {

  }
  return (
    <Dialog
      open={props.dialogOpen}
      onClose={props.handleClose}
      fullWidth={true}
      maxWidth={'xs'}
      sx={{
        '& .MuiPaper-root': {
          backgroundImage: 'url("/assets/Test.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#fff',
        }
      }}
    >
      <DialogTitle sx={{ display: "flex", color: "#fff" }}>
        <IconButton sx={{ marginY: "auto", color: '#0c325e' }}>
          <CodeIcon />
        </IconButton>
        <Typography variant='h5' sx={{ marginY: "auto", color: "#0c325e", fontWeight: "bold" }}>{props.dialogContent}</Typography>
        <IconButton sx={{ marginLeft: "auto", marginY: "auto", color: "#0c325e" }} onClick={props.handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            textAlign: 'center',
            marginTop: '10px',
            fontSize: '12px',
            backgroundColor: '#1e2222',
            color: 'white',
            padding: '10px',
            borderRadius: '10px',
            position: 'relative',
            overflow: 'hidden', // Ensures the animation doesn't overflow
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              padding: '2px', // Adjust for sharper visibility
              background: 'linear-gradient(90deg, #2469bc, #63a4ff, #2469bc)',
              backgroundSize: '300% 300%', // Larger gradient for more movement
              animation: 'move-border 2s linear infinite', // Faster animation
              zIndex: -1,
            },
            '@keyframes move-border': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        >
          React is one of the most widely used libraries in web development, powering
          over 10 million websites globally, including major platforms like Facebook,
          Instagram, and Netflix.
        </Typography>

        <Typography sx={{ textAlign: "center", marginTop: "20px", color: "#73777d", fontSize: "14px", fontWeight: "bold" }}>Take a test to build your Learning Path</Typography>
        <AscendButtonComp text={'Begin Test'} handleClick={handleBeginTest} styles={{ marginY: "10px", marginX: "auto", paddingX: "20px", borderRadius: "10px" }} />
      </DialogContent>
    </Dialog>
  )
}

export default SkillTestDialog;