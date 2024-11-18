import React from 'react';
import { Box, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

interface LockedBoxCompProps {
  imageUrl: String;
  text: String;
}

const LockedBoxComp = (props: LockedBoxCompProps) => (
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
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      "&:hover": {
        transform: "translateY(-10px)",
      },
      backgroundImage: `url(${props.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(2px)',
        zIndex: 1,
      },
    }}
  >
    <LockIcon
      sx={{
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        zIndex: 2,
      }}
    />
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: "center",
          position: 'relative',
          zIndex: 2,
        }}
      >
        {props.text}
      </Typography>
      <Typography
        component="div"
        sx={{
          fontSize: "14px",
          color: 'white',
          fontWeight: 'bold',
          textAlign: "center",
          position: 'relative',
          zIndex: 2,
        }}
      >
        Locked Content <span style={{ fontSize: "9px" }}>(Finish Previous Level(s) to unlock)</span>
      </Typography>
    </Box>
  </Box>
);

export default LockedBoxComp
