import { Box, Typography } from '@mui/material'
import React from 'react'
import ResourceComp from './ResourceComp'
import AscendButtonComp from './AscendButtonComp'

const BasicComp = () => {
  const handleTakeTest = () => {

  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ResourceComp locked={false} />
      <ResourceComp locked={true} />
      <ResourceComp locked={true} />
      <AscendButtonComp text={'Test'} handleClick={handleTakeTest} styles={{ margin: "20px auto 0px 0px" }} />
      <Typography sx={{marginTop: "10px", fontSize: "10px", color: "whitesmoke"}}>*Clearing Basic Level Test will unlock Intermediate Level</Typography>
    </Box>
  )
}

export default BasicComp