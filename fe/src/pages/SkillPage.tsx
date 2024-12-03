import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import Grid from "@mui/material/Grid2"
import SkillImageComp from '../components/SkillImageComp'
import SkillTestDialog from '../components/SkillTestDialog'
import ArrowDownIcon from "@mui/icons-material/ArrowDownward"
import WrapperComp from '../components/WrapperComp'
import useFetch from '../hooks/useFetch'

const SkillPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');
  const [showAllSkills, setShowAllSkills] = useState(false);

  const handleClose = () => {
    setDialogOpen(false);
  }

  const handleSkillClick = (skillTitle: string, skillContent: string) => {
    setDialogContent(skillContent);
    setDialogTitle(skillTitle);
    setDialogOpen(true);
  }

  const handleLoadMore = () => {
    setShowAllSkills(true);
  }

  const { data, error, loading } = useFetch({
    url: `${process.env.REACT_APP_API_URL}/skills/fetch-skills`,
  });

  return (
    <WrapperComp title={'Explore Skills'} loading={loading} error={error} noData={data?.length === 0}>
      <Box sx={{ background: "#1e2222", padding: "20px", display: "flex", flexDirection: "column" }}>
        <Grid container spacing={3} columns={{ xs: 2, md: 12 }}>
          {data?.skills?.slice(0, showAllSkills ? data?.skills?.length : 10).map((skill: any, index: any) => (
            <Grid size={{ xs: 1, md: 2.4 }} key={index} onClick={() => handleSkillClick(skill?.name, skill?.sd)}>
              <SkillImageComp title={skill?.name} />
            </Grid>
          ))}
        </Grid>

        {!showAllSkills && data?.skills?.length !== 10 && (
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

        <SkillTestDialog dialogOpen={dialogOpen} dialogContent={dialogContent} handleClose={handleClose} dialogTitle={dialogTitle} />
      </Box>
    </WrapperComp>
  )
}

export default SkillPage;
