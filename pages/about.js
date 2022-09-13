import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Container, Grid, Button, Divider } from '@mui/material'
import Image from 'next/image'
import styles from '../styles/About.module.css'
// import Divider from '../components/About/Divider'
import Team from '../components/About/Team/Team'
import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from "../components/Layout/Footer/Footer"

// import dynamic from "next/dynamic"


const About = ({ setSelectedTheme }) => {




    return (
        <>
            <Head>
                <title>About - DubiSign</title>
                <meta name="description" content="DubiSign - About " />
            </Head>
            <div>
                <ReactFullpage

                    licenseKey={'YOUR_KEY_HERE'}
                    scrollingSpeed={1000} /* Options here */
                    scrollHorizontally={true}  /* Because we are using the extension */
                    scrollHorizontallyKey={'YOUR KEY HERE'}

                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <Container maxWidth="xl" sx={{ mt: 10, mb: 0 }} >

                                        <Box className={styles.about1}>

                                            <Grid container spacing={5}>
                                                <Grid item xs={5}>

                                                    <Box className={styles.detail}>
                                                        <Typography variant="h2" component='h1' >Who we are</Typography>
                                                        <Typography variant="subtitle2" sx={{ mb: 2 }} component='p'>
                                                            We are a team of creative thinkers, collaborative product owners, and adept coders. We place primary value on solid engineering and innovative problem solving.
                                                        </Typography>
                                                        <Typography variant="subtitle2" sx={{ mb: 2 }} component='p'>
                                                            Choose what matters to your business and your customers. Bring out your business to the whole world.
                                                        </Typography>
                                                        <Typography variant="subtitle2" sx={{ mb: 2 }} component='p'>
                                                            We&#39;re here to make your life easier - talk to us about how we can help. Get in touch so that we can start elevating you to where you deserve to be.
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={7}>

                                                    {/* <Box className={styles.image}> */}
                                                    <Image
                                                        src='/about/museum_of_the_future.png'
                                                        width={812}
                                                        height={531}
                                                        alt="museum_of_the_future"
                                                    />
                                                    {/* </Box> */}
                                                </Grid>
                                            </Grid>

                                        </Box>
                                    </Container >
                                </div>
                                <div className="section fp-auto-height">
                                    <Box sx={{ mt: 0 }}>
                                        <Box className={styles.title} >
                                            <Divider>
                                                <Typography variant="h4" component='h2' >Our Vision</Typography>
                                            </Divider>
                                        </Box>

                                        <Box className={styles.container}>
                                            <Container maxWidth="xl" sx={{ pt: 16, pb: 0 }} >
                                                <Box className={styles.about2}>

                                                    <Grid container spacing={5} alignItems="center" justifyContent="center">

                                                        <Grid item xs={4.2}>
                                                            {/* <Box className={styles.image}> */}
                                                            <Image
                                                                src='/about/vision.png'
                                                                width={500}
                                                                height={500}
                                                                alt="vision"
                                                            />
                                                            {/* </Box> */}
                                                        </Grid>
                                                        <Grid item xs={7.8}>
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
                                                                <Typography variant="subtitle2" component='p'>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu a sit suspendisse et nibh elit nisi, dui erat. Ac nec in sed risus ultrices lorem fringilla massa maecenas. Tincidunt massa nunc scelerisque eu vestibulum quis enim. Nunc, leo aenean ut turpis proin porttitor.
                                                                </Typography>
                                                            </Box>

                                                        </Grid>

                                                    </Grid>

                                                </Box>
                                            </Container>
                                        </Box>
                                    </Box>
                                </div>
                                <div className="section fp-auto-height">
                                    <Box sx={{ mt: 10 }}>
                                        <Box className={styles.title2}>
                                            <Divider>
                                                <Typography variant="h4" component='h2' >The Core Team</Typography>
                                            </Divider>
                                        </Box>

                                        <Container maxWidth="xl" sx={{ mt: 15, mb: 0 }} >
                                            <Box className={styles.team} >
                                                <Typography variant="subtitle2" component='p' className={styles.p}>
                                                    This team is what makes our service from ordinary to extraordinary solutions through our culture towards ideate, innovate and deliver world-class service excellence.
                                                </Typography>
                                                <Team />
                                            </Box>
                                        </Container>
                                    </Box>
                                </div>
                                <div className="section fp-auto-height">
                                    <Container maxWidth="xl" className={styles.container2} sx={{ mt: 30 }}>
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
                                <div className="section fp-auto-height">
                                    <Footer setSelectedTheme={setSelectedTheme} />
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />






            </div>


        </>
    )
}

export default About