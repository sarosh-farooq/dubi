import React from 'react'
import { Box, Container, Grid, Button, Typography } from '@mui/material'
import styles from '../../styles/Services.module.css'
import ServicesButton from '../../components/Services/ServiceButton/ServicesButton'
import ServicesButtonMobile from '../../components/Services/ServiceButtonMobile/ServicesButtonMobile'
import Head from 'next/head'

function Services() {


    return (
        <div className='content'>
            <Head>
                <title>DubiSign - Services</title>
                <meta name="description" content="DubiSign Services" />
            </Head>

            <Container maxWidth="xl" sx={{ mt: { md: 30, xs: 16 }, mb: { md: 6, xs: 16 } }} className={styles.container} >
                <Grid container alignItems="flex-start" justifyContent="flex-start" sx={{ height: "100%", display: { xs: 'none', sm: 'flex' } }}>
                    <Grid item xs={4}>
                        <Box className={styles.ServicesButton}>
                            <ServicesButton url="" />
                        </Box>
                    </Grid>
                    <Grid item xs={7} sx={{ height: "100%" }}>
                        <Box>
                            <Typography variant="h3" component="h1" sx={{ mb: 6 }}>
                                Learn more about the services we provide
                            </Typography>
                            <Typography variant="subtitle1" component="p" className={styles.p}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl magna facilisis parturient. Facilisis nunc ut dignissim rhoncus semper sem. Ullamcorper mauris diam, viverra pulvinar leo. Consectetur ullamcorper sem tristique interdum sed.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Typography variant="h3" component="h1" sx={{ mb: 6 }}>
                        Learn more about the services we provide
                    </Typography>
                    <ServicesButtonMobile />
                </Box>

            </Container>

        </div >
    )
}

export default Services