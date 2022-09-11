import React from 'react'
import { Container, Typography, Grid, Button, Box } from '@mui/material'
import BlogsView from '../../components/Blogs/BlogView/BlogsView'
import Sidebar from '../../components/Blogs/Sidebar/Sidebar'
import styles from '../../styles/Blog.module.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Head from 'next/head'


const Blogs = () => {
  return (
    <div className='content'>

      <Head>
        <title>DubiSign - Blogs</title>
        <meta name="description" content="DubiSign blogs detail" />
      </Head>

      <Container maxWidth="xl" sx={{ mt: 27, mb: 14 }} >
        <Box>


          <Grid container spacing={15}>
            <Grid item xs={8}>
              <Typography className={styles.h1} variant="h3" sx={{ mb: 9 }} component="h1">Blogs</Typography>
              <BlogsView
                title="Find out about the latest trends in design"
                image="/blogs/blog1.png"
                date="December 29, 2021"
                author="admin"
              />
              <BlogsView
                title="New ways to promote your business"
                image="/blogs/blog2.png"
                date="December 29, 2021"
                author="admin"
              />
              <BlogsView
                title="Find out about the latest trends in design"
                image="/blogs/blog1.png"
                date="December 29, 2021"
                author="admin"
              />
              <BlogsView
                title="New ways to promote your business"
                image="/blogs/blog2.png"
                date="December 29, 2021"
                author="admin"
              />

              <Button endIcon={<ArrowDownwardIcon />} size="large" className={styles.buttonMore} variant="contained" color="primary">
                View Older
              </Button>

            </Grid>
            <Grid item xs={4}>
              <Sidebar />
            </Grid>
          </Grid>

        </Box>
      </Container>
    </div>
  )
}

export default Blogs