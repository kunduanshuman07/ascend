import React, { useState, useEffect } from 'react';
import { Box, Typography, LinearProgress, Card, Collapse, Fade } from '@mui/material';
import Grid from "@mui/material/Grid2";
import { useNavigate } from 'react-router-dom';
import AscendButtonComp from './AscendButtonComp';

const LearningPathComp = () => {
  const navigate = useNavigate();
  const progress = 75;
  const badgeProgress: any = {
    basic: true,
    intermediate: true,
    advanced: false,
  };
  const totalLearningHours = 40;
  const modulesCompleted = 6;
  const totalModules = 8;

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '20px',
        backgroundColor: '#2e2e2e',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <Fade in={showContent} timeout={1000}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5" sx={{ color: 'whitesmoke', fontSize: "20px", marginY: "auto" }}>
            Active Learning Path: ReactJS
          </Typography>
          <AscendButtonComp text={'Start Learning'} handleClick={() => navigate('/classroom/active-path')} />
        </Box>
      </Fade>
      <Collapse in={showContent} timeout={1000}>
        <Box>
          <Typography variant="body1" sx={{ color: 'whitesmoke', marginBottom: '8px' }}>
            Overall Progress: {progress}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: '10px',
              borderRadius: '5px',
              backgroundColor: '#424242',
              '& .MuiLinearProgress-bar': {
                transition: 'width 1.5s ease-in-out',
              },
            }}
          />
        </Box>
      </Collapse>

      <Collapse in={showContent} timeout={1000}>
        <Box>
          <Typography variant="h6" sx={{ color: 'whitesmoke', marginBottom: '16px' }}>
            Badge Status
          </Typography>
          <Grid container spacing={3} columns={{ xs: 12, md: 12 }}>
            {Object.keys(badgeProgress).map((badge) => (
              <Grid size={{ xs: 12, md: 4 }} key={badge}>
                <Box
                  sx={{
                    transform: 'scale(1)',
                    transition: 'transform 1s ease',
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: 'rgba(66, 66, 66, 0.85)',
                      color: 'whitesmoke',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '10px',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url('/assets/Learning.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(2px)',
                        zIndex: 1,
                      }}
                    />

                    <Box
                      sx={{
                        position: 'relative',
                        zIndex: 2,
                        padding: '20px',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                        {badge}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {badgeProgress[badge] ? 'Earned 🏆' : 'Not Earned'}
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Collapse>

      <Collapse in={showContent} timeout={1000}>
        <Grid container spacing={3} columns={{ xs: 12, md: 12 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                backgroundColor: 'rgba(66, 66, 66, 0.85)',
                color: 'whitesmoke',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url('/assets/Hours.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(2px)',
                  zIndex: 1,
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '20px',
                }}
              >
                <Typography variant="h6">Learning Hours Spent</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>{totalLearningHours} hrs</Typography>
              </Box>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: 'rgba(66, 66, 66, 0.85)',
                color: 'whitesmoke',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url('/assets/Modules.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(5px)',
                  zIndex: 1,
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '20px',
                }}
              >
                <Typography variant="h6">Modules Completed</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {modulesCompleted} <span style={{ fontSize: "16px" }}>out of</span> {totalModules}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

      </Collapse>

      <Fade in={showContent} timeout={1000}>
        <Box>
          <Typography variant="body1" sx={{ color: 'whitesmoke', fontSize: "12px" }}>
            You have earned the **Basic** and **Intermediate** badges. Unlock the **Advanced** badge to become pro in ReactJS!
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default LearningPathComp;
