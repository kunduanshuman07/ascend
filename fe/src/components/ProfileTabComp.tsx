import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProfileBasicInfoComp from './ProfileBasicInfoComp';
import ProfileExpComp from './ProfileExpComp';
import ProfileSocialComp from './ProfileSocialComp';
import ProfileAccountComp from './ProfileAccountComp';

interface ProfileTabCompProps{
    data: any;
}
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ProfileTabComp = (props: ProfileTabCompProps) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", color: "whitesmoke" }}>
            <Box sx={{ textTransform: 'none' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor='primary'>
                    <Tab label="Basic Info" {...a11yProps(0)} sx={{ textTransform: "none", color: "white", fontWeight: "bold" }} />
                    <Tab label="Experience" {...a11yProps(1)} sx={{ textTransform: "none", color: "white", fontWeight: "bold" }} />
                    <Tab label="Social" {...a11yProps(2)} sx={{ textTransform: "none", color: "white", fontWeight: "bold" }} />
                    <Tab label="Account" {...a11yProps(2)} sx={{ textTransform: "none", color: "white", fontWeight: "bold" }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <ProfileBasicInfoComp data={props.data}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <ProfileExpComp data={props.data}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <ProfileSocialComp data={props.data}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <ProfileAccountComp data={props.data}/>
            </CustomTabPanel>
        </Box>
    );
}

export default ProfileTabComp;