import React, { useState } from 'react'
import { Box } from '@mui/material'
import Grid from "@mui/material/Grid2"
import SkillImageComp from '../components/SkillImageComp'
import SkillTestDialog from '../components/SkillTestDialog'

const skillItems = [
  {
    id: 1,
    title: 'ReactJS'
  },
  {
    id: 2,
    title: 'NodeJS'
  },
  {
    id: 3,
    title: 'Sql'
  },
  {
    id: 4,
    title: 'Python'
  },
  {
    id: 5,
    title: 'DataAnalytics'
  },
]

const SkillPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('React');
  const handleClose = () => {
    setDialogOpen(false);
  }
  const handleSkillClick = () => {
    setDialogContent('React');
    setDialogOpen(true);
  }
  return (
    <Box>
      <Grid container spacing={2} columns={{ xs: 1, md: 12 }} sx={{ background: "#1e2222", padding: "20px" }}>
        {skillItems?.map((skill, index) => (
          <Grid size={{ xs: 1, md: 3 }} key={index} onClick={handleSkillClick}>
            <SkillImageComp title={skill.title} imageUrl={`/assets/${skill.title}.jpg`} />
          </Grid>
        ))}
      </Grid>
      <SkillTestDialog dialogOpen={dialogOpen} dialogContent={dialogContent} handleClose={handleClose} />
    </Box>
  )
}

export default SkillPage