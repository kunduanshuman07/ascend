import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

interface UnLockedBoxCompProps {
  imageUrl: String;
  text: String;
}

const UnlockedBoxComp = (props: UnLockedBoxCompProps) => (
  <Box
    sx={{
      position: 'relative',
      width: 300,
      height: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      overflow: 'hidden',
      border: "3px solid #05f5cd",
      backgroundImage: `url(${props.imageUrl})`,
      backgroundSize: 'cover',
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      "&:hover": {
        transform: "translateY(-10px)",
      },
      backgroundPosition: 'center',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(0.2px)',
        zIndex: 1,
      },
    }}
  >
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          textAlign: "center",
          color: 'white',
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {props.text}
      </Typography>
      <Box sx={{ display: "flex", marginTop: "10px", backgroundColor: "white", position: 'relative',
            zIndex: 2, padding: "5px 10px", borderRadius: "5px" }}>
        <Typography
          component="div"
          sx={{
            fontSize: "10px",
            color: '#000000',
            marginRight: "10px",
            position: 'relative',
            zIndex: 2,
          }}
        >
          Progress
        </Typography>
        <LinearProgress variant='determinate' value={80} sx={{
          color: "white", width: "120px", margin: "auto", position: 'relative',
          zIndex: 2, borderRadius: "10px",
        }} />
         <Typography
          component="div"
          sx={{
            fontSize: "10px",
            color: '#000000',
            marginLeft: "10px",
            fontWeight: "bold",
            position: 'relative',
            zIndex: 2,
          }}
        >
          80%
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default UnlockedBoxComp;