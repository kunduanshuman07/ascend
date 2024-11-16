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
import { useNavigate } from 'react-router-dom';

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
        link: "/leaderboard",
        name: "Leaderboard"
    },
    {
        link: "/profile",
        name: "Profile"
    },
];

const AppBarComp = (props: Props) => {
    const { window } = props;
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: "#000000", height: "100vh" }}>
            <Typography variant="h6" sx={{ my: 2, color: "white" }}>
                ascend
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            sx={{
                                textAlign: "center",
                                color: '#9e9fa3',
                                textTransform: "none",
                                ":hover": {
                                    background: "none",
                                    color: "white"
                                }
                            }}
                            onClick={() => navigate(item.link)}>
                            <ListItemText primary={item.name} />
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
            <AppBar component="nav" sx={{ background: "#000000" }} position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        component="img"
                        src='/assets/ascend.svg'
                        alt='logo'
                        width={30}
                        height={30}
                        sx={{ display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                        onClick={() => navigate("/")}
                    />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
                        onClick={() => navigate("/")}
                    >
                        ascend
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, index) => (
                            <Button key={index}
                                onClick={() => navigate(item.link)}
                                sx={{
                                    color: '#9e9fa3',
                                    textTransform: "none",
                                    ":hover": {
                                        background: "none",
                                        color: "white"
                                    }
                                }}>
                                {item.name}
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