import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Divider, Container, Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = ({ setSelectedTheme }) => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setSelectedTheme(event.target.checked !== true ? 'light' : 'dark')
    };


    return (

        <Container maxWidth="xl" className={styles.container} >
            <Divider />
            <Box className={styles.footer}>
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

                <Box className={styles.rightSection} sx={{ display: { xs: "none !important", md: "flex !important" } }}>
                    <Box>
                        <FormControlLabel sx={{ mt: .2 }}
                            control={<MaterialUISwitch checked={checked}
                                onChange={handleChange} />}
                        />
                    </Box>
                    <Box  className={styles.flexCenter} >
                        <Image
                            src='/flag.png'
                            alt='logo'
                            width={35}
                            height={10}
                        />
                        <Typography variant="subtitle1" className={styles.subtitle}>العربية</Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" className={styles.subtitle}>Dubisign. All Rights Reserved, 2021.</Typography>
                    </Box>
                </Box>
                <Typography sx={{ display: { xs: "block !important", md: "none !important" } }} variant="subtitle1" className={styles.subtitle}>Dubisign. All Rights Reserved, 2021.</Typography>
            </Box>

        </Container>

    )
}

export default Footer



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