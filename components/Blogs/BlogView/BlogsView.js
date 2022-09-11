import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { IconButton, Box } from '@mui/material'
import RightIcon from '@mui/icons-material/ArrowRightAlt';
import styles from './BlogView.module.css'
import { useRouter } from 'next/router';

const BlogsView = ({ title, image, date, author }) => {


    const router = useRouter()

    return (
        <div>
            <Box className={styles.blogView}>
                <Box >
                    <Image
                        src={image}
                        width={215.31}
                        height={136.74}
                        alt={title}
                        className={styles.image}
                    />
                </Box>
                <Box className={styles.detail}>
                    <Typography variant="h5" component="h2">{title}</Typography>
                    <Box className={styles.info}>
                        <Typography variant="body1" component="p">{date}</Typography>
                        <Typography variant="body1" component="p"><span>.</span>{author}</Typography>
                    </Box>
                </Box>
                <Box className={styles.button}>
                    <IconButton color="primary" aria-label="next" size="large" 
                    onClick={()=> router.push('/blogs/blog-detail')}
                    >
                        <RightIcon />
                    </IconButton>
                </Box>
            </Box>
        </div>
    )
}

export default BlogsView