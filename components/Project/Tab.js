import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';




const dividerStyle = {
    backgroundColor: 'var(--primary)',
    width: '2px',
    margin: '5px 0px'
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs({ setTabIndex }) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // setTabIndex(newValue)
    };


    return (
        <Box sx={{ bgcolor: 'background.paper', position: 'relative' }}>
            {/* <AppBar> */}
            <StyledTabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
            >
                <StyledTab label="All" />
                <StyledTab label="Digital Marketing" />
                <StyledTab label="Creative Design" />
                <StyledTab label="Deployment" />
                <StyledTab label="Web Design" />
                <StyledTab label="App Dev" />
            </StyledTabs>

        </Box>
    );
}



const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        sx={{ pb: 1 }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'var(--primary)',
    },
});

const StyledTab = styled((props) => <Tab {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(16),
        font: "inter", fontWeight: 400, fontSize: "25px"
    }),
);