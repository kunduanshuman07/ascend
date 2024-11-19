import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid2"
import { Fade, Typography } from '@mui/material'

interface DashboardCompProps {
  md: any;
  children?: any;
  title: String;
}

const DashboardComp = (props: DashboardCompProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200);
  }, []);
  return (
    <Fade in={showContent} timeout={3000}>
      <Grid size={{ xs: 1, md: props.md }} sx={{ display: "flex", flexDirection: "column", background: "#000000", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)" }}>
        <Typography sx={{ color: "white", fontSize: "16px", padding: "10px", fontWeight: "bold" }}>{props.title}</Typography>
        {props.children}
      </Grid>
    </Fade>
  )
}

export default DashboardComp