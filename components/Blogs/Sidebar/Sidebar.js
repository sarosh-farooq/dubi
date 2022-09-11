import { Box, Chip, Divider, Typography } from '@mui/material'
import React from 'react'
import styles from './Sidebar.module.css'
import MuiLink from '@mui/material/Link';
import NextIcon from '@mui/icons-material/NavigateNext';
import PopularBlog from '../PopularBlog/PopularBlog';

const Sidebar = () => {
    return (
        <div>
            <Box>
                <Box className={styles.tagsContainer}>
                    <Chip className={styles.chip} size="medium" label="Technology" color="primary" />
                    <Chip className={styles.chip} size="medium" label="Business" />
                    <Chip className={styles.chip} size="medium" label="Sports" />
                    <Chip className={styles.chip} size="medium" label="Travel" />
                    <Chip className={styles.chip} size="medium" label="Fashion" />
                    <Chip className={styles.chip} size="medium" label="Lifestyle" />
                    <Chip className={styles.chip} size="medium" label="Design" color="primary" />
                    <Chip className={styles.chip} size="medium" label="Branding" color="primary" />
                    <Chip className={styles.chip} size="medium" label="Food" />
                    <Chip className={styles.chip} size="medium" label="Political" />
                    <Chip className={styles.chip} size="medium" label="News" />
                </Box>
            </Box>
            <Box className={styles.linkSection}>
                <Typography variant="h6" component="h3">Archive</Typography>
                <MuiLink href="#" color="secondary" className={styles.link} underline="hover">
                    <NextIcon fontSize="small" color="primary" />
                    <Typography variant="h6" >2021</Typography>
                </MuiLink>
                <MuiLink href="#" color="secondary" className={styles.link} underline="hover">
                    <NextIcon fontSize="small" color="primary" />
                    <Typography variant="h6" >2020</Typography>
                </MuiLink>
                <MuiLink href="#" color="secondary" className={styles.link} underline="hover">
                    <NextIcon fontSize="small" color="primary" />
                    <Typography variant="h6" >2019</Typography>
                </MuiLink>
                <MuiLink href="#" color="secondary" className={styles.link} underline="hover">
                    <NextIcon fontSize="small" color="primary" />
                    <Typography variant="h6" >2018</Typography>
                </MuiLink>
            </Box>
            <Divider />
            <Box sx={{mt:3}} className={styles.h3}>
                <Typography variant="h6" component="h3">Popular Posts</Typography>
                <PopularBlog
                    title="New ways to promote your business"
                    image="/blogs/blog2.png"
                    date="December 29, 2021"
                />
            </Box>

        </div>
    )
}

export default Sidebar