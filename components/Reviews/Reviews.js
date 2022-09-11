import React from 'react'
import styles from './Reviews.module.css'
import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import { styled } from '@mui/material/styles';

const Reviews = ({ name, image, title, description }) => {
    return (
        <UIBox className={styles.review}>
            <Box className={styles.info}>
                <Box>
                    <Image
                        src={image}
                        height={70}
                        width={70}
                        alt={name}
                    />
                </Box>
                <Box className={styles.detail}>
                    <Typography variant="subtile1" className={styles.name} >{name}</Typography>
                    <Typography variant="subtitle2" className={styles.title} >{title}</Typography>
                </Box>
            </Box>
            <Box className={styles.divider}>
                <Divider sx={{ p: 0 }} />
            </Box>
            <Box className={styles.detail}>
                <Image
                    src="/reviews/review.png"
                    height={30}
                    width={35}
                    alt="reviews"
                />
                <Typography variant="subtitle1" component="p" className={styles.p} sx={{ fontSize: 14, textAlign: 'justify', color: "var(--primaryLight)" }}>
                    {description}
                </Typography>
            </Box>

        </UIBox>
    )
}

export default Reviews

const UIBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode !== 'dark' ? '#fff' : '#161616',
}))