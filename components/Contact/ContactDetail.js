import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '../About/Divider';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import styles from './Contact.module.css'
import Image from 'next/image'

const ContactDetail = ({ address, mobile, phone, mail }) => {
    return (
        <div className={styles.info}>
            <Typography variant="h6" component="h3">Address</Typography>
            <Typography variant="subtitle1" component="p">{address}</Typography>
            <Box sx={{my:3}}>
                <Grid container spacing={1} >
                    <Grid item xs={4}>
                        <Typography variant="h6" component="h3">Mobile</Typography>
                        <Typography variant="subtitle" component="p">{mobile}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" component="h3">Telephone</Typography>
                        <Typography variant="subtitle" component="p">{phone}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" component="h3">Email</Typography>
                        <Typography variant="subtitle" component="p">{mail}</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={styles.image}>
                <Image
                    src="/contact/map.png"
                    height={324}
                    width={628}
                    alt="map"
                />
            </Box>
        </div>
    )
}

export default ContactDetail