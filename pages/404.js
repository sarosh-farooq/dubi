import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import MUILink from '@mui/material/Link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styles from '../styles/Nopage.module.css'
import { useRouter } from 'next/router';
import Head from 'next/head'

const NoPage = () => {

    const router = useRouter();

    return (
        <div className='content'>
            <Head>
                <title>404 - No page found - DubiSign</title>
                <meta name="description" content="DubiSign - 404 - No page found" />
            </Head>
            <Container maxWidth="xl" sx={{ mt: 20, mb: 6 }} >
                <Box className={styles.nopage}>
                    <Typography variant="h1"
                    >
                        404
                    </Typography>
                    <Typography variant="h3" component="h2">
                        Looks like you&#39;re lost
                    </Typography>
                    <Typography variant="h6" component="h3">
                        The page you are looking for is not available.
                    </Typography>
                    <Button onClick={() => router.push('/')} size="large" className={styles.link} variant="text" color="primary" endIcon={<ArrowRightAltIcon color="primary" />}>
                        Go Home
                    </Button>

                </Box>
            </Container>
        </div >
    )
}

export default NoPage