import { Box, Button, Typography, Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import styles from './ServicesButtonMobile.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CircleIcon from '@mui/icons-material/Circle';

const ServicesButton = ({ url }) => {

    const router = useRouter();


    return (
        <div>
            <Box className={styles.ServiceButton}>


                <Box className={styles.button}>
                    <Box className={styles.box}>
                        <Box>
                            <Image
                                src="/home/focus.png"
                                alt="focus"
                                width={35.2}
                                height={35.2}
                            />
                        </Box>
                        <Typography variant="h6" component="h2">
                            Digital Marketing
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" component="p" className={styles.p}>
                            Choose what matters to your business and your customers. Bring out your business to the whole world.
                        </Typography>
                    </Box>
                    <Box className={styles.list}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <ListItem sx={{ pl: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.listDetail}>
                                        Social Media Marketing
                                    </ListItemText>

                                </ListItem>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItem sx={{ pl: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.listDetail}>
                                        Search Engine Optimization
                                    </ListItemText>
                                </ListItem>

                            </Grid>
                            <Grid item xs={12}>
                                <ListItem sx={{ pl: 0 }}>

                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.listDetail}>
                                        Google Adword Campaign
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItem sx={{ pl: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.listDetail}>
                                        Community manager
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>

                <Box className={styles.button}>
                    <Box className={styles.box}>
                        <Box>
                            <Image
                                src="/home/creative.png"
                                alt="creative"
                                width={35.2}
                                height={35.2}
                            />
                        </Box>
                        <Typography variant="h6" component="h2">
                            Creative Design
                        </Typography>
                    </Box>
                </Box>
                <Box className={styles.button}>
                    <Box className={styles.box}>
                        <Box>
                            <Image
                                src="/home/deploy.png"
                                alt="deploy"
                                width={35.2}
                                height={35.2}
                            />
                        </Box>
                        <Typography variant="h6" component="h2">
                            Deployment
                        </Typography>
                    </Box>
                </Box>
                <Box className={styles.button}>
                    <Box className={styles.box}>
                        <Box>
                            <Image
                                src="/home/web.png"
                                alt="web"
                                width={35.2}
                                height={35.2}
                            />
                        </Box>
                        <Typography variant="h6" component="h2">
                            Web Design
                        </Typography>
                    </Box>
                </Box>
                <Box className={styles.button}>
                    <Box className={styles.box}>
                        <Box>
                            <Image
                                src="/home/mobile.png"
                                alt="mobile"
                                width={35.2}
                                height={35.2}
                            />
                        </Box>
                        <Typography variant="h6" component="h2">
                            App Development
                        </Typography>
                    </Box>
                </Box>
            </Box >
        </div >
    )
}

export default ServicesButton