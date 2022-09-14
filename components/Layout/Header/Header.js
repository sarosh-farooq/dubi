import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styles from './Header.module.css';
import Image from 'next/image'
import { useRouter } from 'next/router';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Divider, Container, Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const drawerWidth = 260;
const navItems = ['About', 'Blogs', 'Services', 'Projects', 'Contact'];

function DrawerAppBar(props) {

    const router = useRouter()
    const { window, setSelectedTheme } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setSelectedTheme(event.target.checked !== true ? 'light' : 'dark')
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ ml: 2, position: "relative", height: "100%" }}>
            <Box>

                <Box sx={{ flexGrow: 1, p: "10px 10px 10px 0px", mb: 3 }} onClick={() => router.push('/')}>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={33}
                        height={40}
                    />
                </Box>

                <List>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding className={styles.li}>
                            <ListItemButton sx={{ textAlign: 'center', px: 0 }}>
                                <ListItemText primary={item} className={styles.listItem} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{ p: 2, position: "absolute", bottom: 10, width: '100%' }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box>
                        <FormControlLabel sx={{ mt: .2 }}
                            control={<MaterialUISwitch checked={checked}
                                onChange={handleChange} />}
                        />
                    </Box>
                    <Box className={styles.flexCenter}>
                        <Image
                            src='/flag.png'
                            alt='logo'
                            width={35}
                            height={10}
                        />
                        <Typography variant="subtitle1" className={styles.subtitle}>العربية</Typography>
                    </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box className={styles.linkSection}>
                    <a href=''>
                        <FacebookIcon color='primary' className={styles.link} />
                    </a>
                    <a href=''>
                        <InstagramIcon color='primary' className={styles.link} />
                    </a>
                    <a href=''>
                        <LinkedInIcon color='primary' className={styles.link} />
                    </a>
                    <a href=''>
                        <WhatsAppIcon color='primary' className={styles.link} />
                    </a>
                </Box>
                <Typography variant="subtitle1" className={styles.subtitle}>Dubisign. All Rights Reserved, 2021.</Typography>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <UIAppBar component="nav" className={styles.navbar} >
                <Container maxWidth="xl" sx={{ p: {md: '30px 0px 10px 0px !important', xs: "5px 0px 5px 0px"} }}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>

                            <IconButton
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                color="primary"
                            >
                                <MenuIcon fontSize="medium" sx={{fontSize: "40px"}} />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1, p: "10px 10px 10px 0px" }} onClick={() => router.push('/')}>
                            <Image
                                src='/logo.png'
                                alt='logo'
                                width={45}
                                height={52}
                            />
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={styles.topBarMenu}>
                            {navItems.map((item) => (
                                <Button color='secondary' size='large' variant='text' key={item} onClick={() => router.push(`/${item.toLocaleLowerCase()}`)} >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </UIAppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;


const UIAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.mode !== 'dark' ? '#fff' : '#161616',
    // boxShadow: "none",
    // backgroundImage: "none"
}))



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 48,
    height: 34,
    padding: 2,
    top: 4,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(2px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(21px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#161616',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#3F3F3F' : '#E4E4E4',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#001e3c',
        width: 24,
        height: 24,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#3F3F3F' : '#E4E4E4',
        borderRadius: 20 / 2,
        height: 22,
    },
}));