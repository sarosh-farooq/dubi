import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import styles from './Service.module.css'

const Service = ({ image, alt, title, description }) => {
    return (
        <UIBox className={styles.service}>

            <Box className={styles.image}>
                <Image
                    src={image}
                    height={160}
                    width={160}
                    alt={alt}
                />
            </Box>

            <Box className={styles.detail}>
                <Typography variant="h6" component='h3' className={styles.h3}>
                    {title}
                </Typography>
                <Typography variant="subtitle1" component='p' sx={{ display: { xs: "none", sm: "block" } }}>
                    {description}
                </Typography>

            </Box>
        </UIBox>
    )
}

export default Service


const UIBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode !== 'dark' ? '#fff' : '#161616',
}))