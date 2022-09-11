
import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { IconButton, Box } from '@mui/material'
import RightIcon from '@mui/icons-material/ArrowRightAlt';
import styles from './PopularBlog.module.css'

const PopularBlog= ({ title, image, date }) => {
    return (
        <div>
            <Box className={styles.blogView}>
                <Box>
                    <Image
                        src={image}
                        width={129.09}
                        height={85.29}
                        alt={title}
                        className={styles.image}
                    />
                </Box>
                <Box className={styles.detail}>
                    <Typography variant="subtitle1" component="h2">{title}</Typography>
                    <Box className={styles.info}>
                        <Typography variant="body1" component="p">{date}</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default PopularBlog