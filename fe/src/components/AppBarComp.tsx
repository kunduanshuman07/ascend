import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

interface Props {
  window?: () => Window;
}

const drawerWidth = 180;
const navItems = [
  {
    link: "/skills",
    name: "Skills"
  },
  {
    link: "/classroom",
    name: "Classroom"
  },
  {
    link: "/dashboard",
    name: "Dashboard"
  },
  {
    link: "/profile",
    name: "Profile"
  },
  {
    link: "",
    name: "Signout"
  },
];

const AppBarComp = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth } = useAuth();
  
  const handleTabClick = (name: any, link: any) => {
    if (name === "Signout") {
      localStorage.removeItem("User");
      setAuth(false);
      navigate("/");
    }
    else {
      navigate(link);
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: "#000000", height: "100vh" }}>
      <Box sx={{ display: "flex", mt: "10px" }}>
        <Box
          component="img"
          src="/assets/ascend.svg"
          alt="logo"
          width={30}
          height={30}
          sx={{
            display: { sm: "block", cursor: "pointer" },
            marginLeft: "auto",
            marginY: "auto"
          }}
        />
        <Typography variant="h6" sx={{ my: "auto", color: "white", marginRight: "auto", fontSize: "18px" }}>
          ascend
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems?.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                fontSize: "10px",
                color: location.pathname === item?.link ? 'white' : location.pathname === '/classroom/active-path' ? 'white' : '#9e9fa3',
                textTransform: "none",
                borderBottom: location.pathname === item?.link ? "2px solid #2469bc" : location.pathname === '/classroom/active-path' && item?.name === 'Classroom' ? "2px solid #2469bc" : "none",
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px",
                ":hover": {
                  background: "none",
                  color: "white"
                },
              }}
              onClick={() => handleTabClick(item?.name, item?.link)}
            >
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "#000000",
          height: "40px",
          display: "flex",
          justifyContent: "center",
        }}
        position="fixed"
      >
        <Toolbar
          disableGutters
          sx={{
            height: "40px", // Ensure Toolbar height matches AppBar height
            minHeight: "40px", // Override default minHeight
            display: "flex",
            alignItems: "center", // Vertically center content
            justifyContent: "space-between", // Space content evenly
            padding: "0 16px", // Adjust horizontal padding as needed
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              height: "100%",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src="/assets/ascend.svg"
            alt="logo"
            width={30}
            height={30}
            sx={{
              display: { xs: "none", sm: "block", cursor: "pointer" },
              marginY: "auto",
              marginLeft: "20px"
            }}
          />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontSize: "18px",
              display: { xs: "none", sm: "block", cursor: "pointer" },
            }}
            onClick={() => navigate("/skills")}
          >
            ascend
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems?.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleTabClick(item?.name, item?.link)}
                sx={{
                  color: location.pathname === item?.link ? 'white' : location.pathname === '/classroom/active-path' && item?.name === 'Classroom' ? 'white' : '#9e9fa3',
                  textTransform: "none",
                  fontSize: "11px",
                  borderBottom: location.pathname === item?.link ? "2px solid #2469bc" : location.pathname === '/classroom/active-path' && item?.name === 'Classroom' ? "2px solid #2469bc" : "none",
                  fontWeight: "bold",
                  ":hover": {
                    background: "none",
                    color: "white",
                  },
                }}
              >
                {item?.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>


      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default AppBarComp;
