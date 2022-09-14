import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Container, Grid, Button, Divider } from '@mui/material'
import Image from 'next/image'
import styles from '../styles/About.module.css'
// import Divider from '../components/About/Divider'
import Team from '../components/About/Team/Team'
import Head from 'next/head'

// import dynamic from "next/dynamic"


const About = () => {




    return (
        <div className='content'>
            <Head>
                <title>About - DubiSign</title>
                <meta name="description" content="DubiSign - About " />
            </Head>
            <div>
                <Container maxWidth="xl" sx={{ mt: { md: 30, xs: 16 }, mb: { md: 20, xs: 16 } }} >

                    <Box className={styles.about1}>

                        <Grid container spacing={5}>
                            <Grid item sx={12} md={5}>

                                <Box className={styles.detail}>
                                    <Typography variant="h2" component='h1' >Who we are</Typography>
                                    <Typography variant="subtitle2" sx={{ mb: 2 }} component='p'>
                                        We are a team of creative thinkers, collaborative product owners, and adept coders. We place primary value on solid engineering and innovative problem solving.
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ mb: 2 }} component='p'>
                                        Choose what matters to your business and your customers. Bring out your business to the whole world.
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ mb: 2, display: {md: "block", xs: "none"} }} component='p'>
                                        We&#39;re here to make your life easier - talk to us about how we can help. Get in touch so that we can start elevating you to where you deserve to be.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid sx={12} item md={7}>

                                {/* <Box className={styles.image}> */}
                                <Image
                                    src='/about/museum_of_the_future.png'
                                    width={812}
                                    height={531}
                                    alt="museum_of_the_future"
                                />
                                {/* </Box> */}
                            </Grid>
                            <Grid item xs={12} md={0} sx={{ display: {md: "none", xs: "block"} }}>
                                <Box className={styles.detail}>
                                    <Typography variant="subtitle2" sx={{ mb: 2 }} component='p'>
                                        We&#39;re here to make your life easier - talk to us about how we can help. Get in touch so that we can start elevating you to where you deserve to be.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Container >
                <Box className={styles.title}>
                    <Divider>
                        <Typography variant="h4" component='h2' >Our Vision</Typography>
                    </Divider>
                </Box>
                <Box className={styles.container}>
                    <Container maxWidth="xl" sx={{ pt: { md: 16, xs: 8 }, pb: { md: 25, xs: 8 } }} >
                        <Box className={styles.about2}>

                            <Grid container spacing={5} alignItems="center" justifyContent="center">

                                <Grid item sx={12} md={4.2}>
                                    {/* <Box className={styles.image}> */}
                                    <Image
                                        src='/about/vision.png'
                                        width={500}
                                        height={500}
                                        alt="vision"
                                    />
                                    {/* </Box> */}
                                </Grid>
                                <Grid item sx={12} md={7.8}>
                                    <Box className={styles.detail}>
                                        <Typography variant="subtitle2" component='p'>
                                            We promise to deliver great results for our customers because we know that&#39;s what keeps them coming back to us. That&#39;s why at Dubisign,
                                            the focus is always on your needs and we our absolute best to satisfy your needs.
                                        </Typography>
                                        <Typography variant="subtitle2" component='p' sx={{ my: 6 }}>
                                            <em>
                                                “Dedicated to creating the best software solutions to our clients”
                                            </em>
                                        </Typography>
                                        <Typography variant="subtitle2" component='p' sx={{ display: {md: "block", xs: "none"} }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu a sit suspendisse et nibh elit nisi, dui erat. Ac nec in sed risus ultrices lorem fringilla massa maecenas. Tincidunt massa nunc scelerisque eu vestibulum quis enim. Nunc, leo aenean ut turpis proin porttitor.
                                        </Typography>
                                    </Box>

                                </Grid>

                            </Grid>

                        </Box>
                    </Container>
                </Box>
                <Box className={styles.title2}>
                    <Divider>
                        <Typography variant="h4" component='h2' >The Core Team</Typography>
                    </Divider>
                </Box>
                <Container maxWidth="xl" sx={{ mt: 16, mb: 3 }} >
                    <Box className={styles.team} >
                        <Typography variant="subtitle2" sx={{ display: { xs: "none", md: "block" } }} component='p' className={styles.p}>
                            This team is what makes our service from ordinary to extraordinary solutions through our culture towards ideate, innovate and deliver world-class service excellence.
                        </Typography>
                        <Team />
                    </Box>
                </Container>

                <Container maxWidth="xl" className={styles.container2} >
                    <Box className={styles.wrapper}>
                        <Box className={styles.grow}>
                            <Typography variant="h3" component="h3" >Grow with Us</Typography>
                            <Typography variant="subtitle2" component='p'>
                                We&#39;sre here to make your life easier - talk to us about how we can help. Get in touch so that we can start elevating you to where you deserve to be.
                            </Typography>
                            <Button variant="contained" size='large' color="primary" sx={{ mt: 2 }}>
                                Grow Your Business
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </div>


        </div>
    )
}

export default About