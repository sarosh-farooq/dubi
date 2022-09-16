import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { IconButton, Box, Button } from '@mui/material'
import RightIcon from '@mui/icons-material/ArrowRightAlt';
import styles from './BlogViewMobile.module.css'
import { useRouter } from 'next/router';

const BlogsViewMobile
    = ({ title, image, date, author, short }) => {

        const router = useRouter()


        const [isOpen, setIsOpen] = React.useState(false)

        return (
            <div>
                <Box className={styles.blogView} onClick={() => setIsOpen(!isOpen)}>

                    <Image
                        src={image}
                        width="700px"
                        height="400px"
                        alt={title}
                        responsive
                        className={styles.image}
                    />

                    <Box className={styles.detail}>
                        <Typography variant="h5" component="h2">{title}</Typography>
                        <Box className={styles.info}>
                            <Typography variant="body1" component="p">{date}</Typography>
                            <Typography variant="body1" component="p"><span>.</span>{author}</Typography>
                        </Box>
                    </Box>
                    {isOpen ?
                        <>
                            <Box className={styles.short}>
                                <Typography variant="subtitle1" component="p">{short}</Typography>
                            </Box>

                            <Box className={styles.button}>
                                <Button endIcon={<RightIcon />} variant="contained" color="primary" aria-label="next"
                                    onClick={() => router.push('/blogs/blog-detail')}>
                                    Read More
                                </Button>
                            </Box>
                        </>
                        : ""}
                </Box>
            </div>
        )
    }

export default BlogsViewMobile
