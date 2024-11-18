import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import Grid from "@mui/material/Grid2"
import SkillImageComp from '../components/SkillImageComp'
import SkillTestDialog from '../components/SkillTestDialog'
import ArrowDownIcon from "@mui/icons-material/ArrowDownward"
import WrapperComp from '../components/WrapperComp'

const skillItems = [
  { id: 1, title: 'ReactJS' },
  { id: 2, title: 'NodeJS' },
  { id: 3, title: 'Sql' },
  { id: 4, title: 'Python' },
  { id: 5, title: 'DataAnalytics' },
  { id: 6, title: 'Java' },
  { id: 7, title: 'C++' },
  { id: 8, title: 'Go' },
  { id: 9, title: 'Ruby' },
  { id: 10, title: 'Rust' },
]

const SkillPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('ReactJS');
  const [showAllSkills, setShowAllSkills] = useState(false);

  const handleClose = () => {
    setDialogOpen(false);
  }

  const handleSkillClick = (skillTitle: string) => {
    setDialogContent(skillTitle);
    setDialogOpen(true);
  }

  const handleLoadMore = () => {
    setShowAllSkills(true);
  }

  return (
    <WrapperComp title={'Explore Skills'}>
      <Box sx={{ background: "#1e2222", padding: "20px", display: "flex", flexDirection: "column" }}>
        <Grid container spacing={3} columns={{ xs: 2, md: 12 }}>
          {skillItems.slice(0, showAllSkills ? skillItems.length : 10).map((skill, index) => (
            <Grid size={{ xs: 1, md: 2.4 }} key={index} onClick={() => handleSkillClick(skill.title)}>
              <SkillImageComp title={skill.title} imageUrl={`/assets/${skill.title}.jpg`} />
            </Grid>
          ))}
        </Grid>

        {!showAllSkills && skillItems.length !== 10 && (
          <Button
            endIcon={<ArrowDownIcon />}
            onClick={handleLoadMore}
            sx={{
              marginX: "auto",
              padding: "5px 20px",
              mt: { xs: "20px", md: "60px" },
              backgroundColor: "#1e2222",
              border: "1px solid white",
              textTransform: "none",
              color: "white",
              borderRadius: "20px",
              '&:hover': {
                backgroundColor: "white",
                color: "#1e2222"
              },
            }}
          >
            Load More Skills
          </Button>
        )}

        <SkillTestDialog dialogOpen={dialogOpen} dialogContent={dialogContent} handleClose={handleClose} />
      </Box>
    </WrapperComp>
  )
}

export default SkillPage;
