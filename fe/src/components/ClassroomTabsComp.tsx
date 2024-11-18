import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicComp from './BasicComp';
import IntermediateComp from './IntermediateComp';
import AdvancedComp from './AdvancedComp';

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

const ClassroomTabsComp = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", color: "whitesmoke" }}>
            <Box sx={{ textTransform: 'none' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor='primary'>
                    <Tab label="Basic" {...a11yProps(0)} sx={{ textTransform: "none", color: "white", fontWeight: "bold" }} />
                    <Tab label="Intermediate" {...a11yProps(1)} sx={{ textTransform: "none", color: "white", fontWeight: "bold" }} />
                    <Tab label="Advanced" {...a11yProps(2)} sx={{ textTransform: "none", color: "white", fontWeight: "bold" }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <BasicComp />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <IntermediateComp />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <AdvancedComp />
            </CustomTabPanel>
        </Box>
    );
}

export default ClassroomTabsComp;