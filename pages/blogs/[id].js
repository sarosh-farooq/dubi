import React from 'react'
import { Container, Grid, Typography, Box, Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '../../styles/Blog.module.css'
import Image from 'next/image'
import RightIcon from '@mui/icons-material/ArrowRightAlt';
import LeftIcon from '@mui/icons-material/KeyboardBackspace';
import Head from 'next/head'

const BlogDetail = () => {
    return (
        <div className='content'>
            <Container maxWidth="xl" sx={{ mt: { md: 27, xs: 16 }, mb: { md: 14, xs: 6 } }} className={styles.blog} >

                <Head>
                    <title>Find out about the latest trends in design - DubiSign</title>
                    <meta name="description" content="Find out about the latest trends in design" />
                </Head>

                <Grid container spacing={4}>
                    <Grid item xs={12} >
                        <Box sx={{ display: { xs: "none", md: "block" } }} className={styles.blogImage}>
                            <Image
                                src="/blogs/blog.png"
                                width={690}
                                height={500}
                                alt="reading"
                            />
                        </Box>
                        <Typography variant="h3" component="h1" className={styles.h1}>Find out about the latest trends in design</Typography>
                        <Box className={styles.blogDetail}>
                            <Box className={styles.info} sx={{ mt: {sm: 7, xs: 4}, mb: {sm: 4, xs: 1.5} }}>
                                <Typography variant="subtitle1" sx={{ fontSize: 20 }} component="p">December 29, 2021</Typography>
                                <Typography variant="subtitle1" sx={{ fontSize: 20 }} component="p"><span>.</span> Admin</Typography>
                            </Box>
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
                            </Box>
                        </Box>
                        <Typography variant="subtitle1" component="p" sx={{ width: { sm: "80%", xs: "100%"} }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac facilisi est, phasellus tincidunt amet tellus a tellus ut. Dignissim tincidunt dictum lectus risus, id interdum auctor dignissim nulla.
                        </Typography>
                        <Box sx={{ display: { xs: "block", md: "none" } }} className={styles.blogImage}>
                            <Image
                                src="/blogs/blog.png"
                                width={690}
                                height={500}
                                alt="reading"
                            />
                        </Box>
                        <Typography variant="subtitle1" component="p" sx={{ width: { sm: "80%", xs: "100%"} }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, porttitor gravida urna, vitae diam fermentum sed purus pellentesque. Non sed nullam urna tincidunt suscipit. Nunc, fringilla ac ornare orci. Fringilla commodo cursus tristique phasellus risus feugiat leo purus diam.
                        </Typography>
                        <Typography variant="subtitle1" component="p" sx={{ width: { sm: "80%", xs: "100%"} }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac facilisi est, phasellus tincidunt amet tellus a tellus ut. Dignissim tincidunt dictum lectus risus, id interdum auctor dignissim nulla.
                        </Typography>
                        <Typography variant="subtitle1" component="p" sx={{ width: { sm: "80%", xs: "100%"} }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec auctor tincidunt elementum. Sed libero amet eget augue molestie dignissim platea facilisi ut. Neque quam nisl justo, tempor sit lorem. Bibendum justo turpis ultricies dignissim molestie magna dolor. Mi eget libero, aliquam enim. Pretium sit ipsum faucibus egestas blandit elit, risus. Egestas semper arcu volutpat massa ornare risus etiam mi erat.
                        </Typography>
                        <Typography variant="subtitle1" component="p" sx={{ width: { sm: "80%", xs: "100%"} }} >
                            Consequat ipsum sed viverra at etiam mus sed egestas sed.
                            Tincidunt a vitae egestas neque, lectus. Vulputate bibendum nec, vestibulum proin gravida nibh praesent mauris diam. Posuere penatibus eget volutpat varius arcu. Ut felis fames egestas diam augue ut. Etiam id vitae sed mauris. Diam ut sit donec dui quam. Urna donec blandit viverra tortor sapien etiam eget. Habitant orci velit facilisi egestas. Scelerisque vulputate fermentum ultrices pulvinar non sed.
                        </Typography>


                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={9}>
                    </Grid>
                </Grid>
                <Box className={styles.buttons}>
                    <Box className={styles.singleButton}>
                        <Button startIcon={<LeftIcon />} className={styles.button} variant="contained" color="primary">
                            Previous
                        </Button>
                    </Box>
                    <Box className={styles.singleButton}>
                        <Button endIcon={<RightIcon />} className={styles.button} variant="contained" color="primary">
                            Next
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default BlogDetail