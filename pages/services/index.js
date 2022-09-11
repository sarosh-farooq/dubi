import React from 'react'
import { Box, Container, Grid, Button, Typography } from '@mui/material'
import styles from '../../styles/Services.module.css'
import ServicesButton from '../../components/Services/ServiceButton/ServicesButton'
import Head from 'next/head'

function Services() {


    return (
        <div>
            <Head>
                <title>DubiSign - Services</title>
                <meta name="description" content="DubiSign Services" />
            </Head>
 
                <Container maxWidth="xl" sx={{ mt: 30, pb: 6 }} className={styles.container} >
                    <Grid container alignItems="flex-start" justifyContent="flex-start" sx={{ height: "100%" }}>
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
                </Container>
            
        </div>
    )
}

export default Services