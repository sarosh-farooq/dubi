import React from 'react'
import { Box, Container, Grid, Button, Typography } from '@mui/material'
import styles from '../../styles/Services.module.css'
import ServicesButton from '../../components/Services/ServiceButton/ServicesButton'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import Head from 'next/head'

function ServicesDetail() {


    return (
        <div className='content'>
            <Head>
                <title>Digital Marketing - DubiSign</title>
                <meta name="description" content="DubiSign - Digital Marketing - services" />
            </Head>
            <div className={styles.container} >

                <Container maxWidth="xl" sx={{ mt: 27, pb: 6 }} >
                    <Typography variant="h3" component="h1" sx={{ mb: 12, }}>
                        Digital Marketing
                    </Typography>
                    <Grid container alignItems="flex-start" justifyContent="flex-start">
                        <Grid item xs={5}>
                            <Box className={styles.ServicesButton}>
                                <ServicesButton url="digital" />
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <Box >
                                <Typography sx={{ fontSize: 18 }} variant="subtitle1" component="p" className={styles.p}>
                                    We offer ongoing digital strategy and optimization with development
                                    and creative services and SEO to ensure your website grows along
                                    with your business.
                                </Typography>
                                <Typography sx={{ fontSize: 18 }} variant="subtitle1" component="p" className={styles.p}>
                                    Digital technology allows you to connect with you
                                    customers through every point in their journey from awareness to
                                    purchase.
                                </Typography>
                                <Typography sx={{ fontSize: 18 }} variant="subtitle1" component="p" className={styles.p}>
                                    Nowadays there is a change in the way people shop which
                                    means offline marketing isn&#39;t as active as it used to be. Digital
                                    marketing is not just about social media there is a lot more to it.
                                </Typography>
                            </Box>
                            <Box className={styles.list}>
                                <Grid container spacing={1} sx={{ mt: 4 }}>
                                    <Grid item xs={6}>
                                        <ListItem sx={{ pl: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 30 }}>
                                                <CircleIcon className={styles.icon} color="primary" />
                                            </ListItemIcon>
                                            <ListItemText className={styles.listDetail}>
                                                Social Media Marketing
                                            </ListItemText>

                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem sx={{ pl: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 30 }}>
                                                <CircleIcon className={styles.icon} color="primary" />
                                            </ListItemIcon>
                                            <ListItemText className={styles.listDetail}>
                                                Search Engine Optimization
                                            </ListItemText>
                                        </ListItem>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem sx={{ pl: 0 }}>

                                            <ListItemIcon sx={{ minWidth: 30 }}>
                                                <CircleIcon className={styles.icon} color="primary" />
                                            </ListItemIcon>
                                            <ListItemText className={styles.listDetail}>
                                                Google Adword Campaign
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItem sx={{ pl: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 30 }}>
                                                <CircleIcon className={styles.icon} color="primary" />
                                            </ListItemIcon>
                                            <ListItemText className={styles.listDetail}>
                                                Community manager
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default ServicesDetail